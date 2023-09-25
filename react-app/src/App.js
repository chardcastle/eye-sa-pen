import React, { useState } from "react"
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { investmentOptionsApi, useGetOptionsQuery, useListFundApplicationsByIdQuery } from "./services/investmentOptions"
import * as MaterialUI from "@mui/material";
import { NavLink } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const {
    Typography
} = MaterialUI

function InvestmentOption() {
    const [fundId, setFundId ] = useState("")

    const { data: fundApplications } = useListFundApplicationsByIdQuery(fundId)
    const {
        data,
        isLoading
    } = useGetOptionsQuery()

    const handleChange = (e) => {
        setFundId(String(e.target.value));
    }

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
              Fund applications
            </Typography>
            {isLoading && <p>Loading...</p>}

            <NavLink to={"/fund"}>Invest in a fund</NavLink>

            <p>Browse by fund: {fundId}</p>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Fund</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fundId}
                  label="Fund"
                  onChange={handleChange}
                >
                  {data && data.map(({ id, title }) =>
                      (<MenuItem key={`data-for-${id}`} selected={id === fundId} value={id}>{title}</MenuItem>)
                  )}
                </Select>
            </FormControl>
            <pre>{JSON.stringify(fundApplications, null, 2)}</pre>
        </>
  )
}

export default function App() {
    return (
        <ApiProvider api={investmentOptionsApi}>
            <InvestmentOption />
        </ApiProvider>
    )
}