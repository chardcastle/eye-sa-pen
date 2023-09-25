import React, { useState } from 'react';
import { Box, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from '@mui/material';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { investmentOptionsApi, useGetOptionsQuery } from "./services/investmentOptions";
import FundAmount from "./FundAmount";
import { NavLink } from "react-router-dom";

function FundSelector() {
    const { data } = useGetOptionsQuery()

    const [option, setOption] = useState('')
    const [hasApplied, setHasApplied] = useState(false)
    const [showResponse, setShowResponse] = useState(false)

    const handleChange = (event) => {
        setOption(String(event.target.value));
        setHasApplied(false)
        setShowResponse(false)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Browse funds
            </Typography>
            <p>Return the to <NavLink to={"/"}>homepage</NavLink> to see existing fund applications</p>
            <Grid container rowSpacing={2}>
                <Grid item xs={12} py={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Fund</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            label="Fund"
                            onChange={handleChange}
                        >
                            {data && data.map(({ id, title }) =>
                                (<MenuItem key={`fund-${id}`} selected={id === option} value={id}>{title}</MenuItem>)
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                {option && (
                    <FundAmount
                        fundId={option}
                        isActive={hasApplied}
                        showResponse={showResponse}
                        submitHandler={() => { setHasApplied(true); setShowResponse(true) }}
                    />
                )}
            </Grid>
        </Box>
    );
}

export default function Fund() {
    return (
        <ApiProvider api={investmentOptionsApi}>
            <FundSelector />
        </ApiProvider>
    )
}