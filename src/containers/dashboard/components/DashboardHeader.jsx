import React from 'react'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Heading = styled(Typography)`
    font-size: 80px;
    color: #1a237e;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 5px 10px #283593;

    @media(max-width:650px){
        font-size: 40px
    }
`
const DashboardHeader = () => {
    return (
        <Heading level="h1">Weather History</Heading>
    )
}

export default DashboardHeader