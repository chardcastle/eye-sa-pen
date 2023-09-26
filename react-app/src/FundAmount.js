import React, { forwardRef, useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { usePostFundMutation } from "./services/investmentOptions";
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UserResponse = ({ isSuccess, isError }) => (
    <>
        {isSuccess && (<Grid item xs={12} py={2}><Alert severity="success">Fund application was successful</Alert></Grid>)}
        {isError && (<Grid item xs={12} py={2}><Alert severity="error">Oops - something went wrong</Alert></Grid>)}
    </>
)

export default function FundAmount({ fundId, isActive, showResponse, submitHandler }) {
    const [amount, setAmount ] = useState(0)

    const [
        createFundInvestment, // This is the mutation trigger
        { isSuccess, isError }, // This is the destructured mutation result
    ] = usePostFundMutation()

    const handleFormSubmit = async () => {
        submitHandler()
        await createFundInvestment({ [`investment-optionId`]: parseInt(fundId), amount })
    }

    useEffect(() => {
        setAmount(0)
    }, [fundId]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="hidden" name="investment-optionId" value={fundId} />
            {showResponse && (<UserResponse isSuccess={isSuccess} isError={isError} />)}

            <Grid item xs={12} py={2}>
                <TextField
                    className="MuiGrid-spacing-xs-2"
                    id="outlined-controlled"
                    label="Amount"
                    name="fund-amount"
                    value={amount}
                    disabled={isActive}
                    onChange={(event) => {
                        setAmount(event.target.value);
                    }}
                />
            </Grid>
            <Grid item xs={12} py={2}>
                {!isActive && (
                    <Button onClick={handleFormSubmit} variant="contained">Apply</Button>
                )}
                {isActive && (
                    <>
                        <Button disabled>Apply</Button><br/>
                    </>
                )}
            </Grid>
        </form>
    )
}
