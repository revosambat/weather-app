import React from 'react'
import Input from '@mui/material/Input'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
const DateInput = styled(Input)`
    width: 20vw;
    background-color: #fefefefe;
    opacity: 0.5;
    padding: 10px;
    color: #1a237e;
    font-size: 24px;

    @media(max-width:650px) {
        width: 30vw;
        height: 8vh;
        font-size: 20px;
    }
`

const StyledLabel = styled(Typography)`
    color: #fefefe;
    font-size: 16px;
    font-weight: bold;
`
const CustomDateRangePicker = ({ searchData, handleChange }) => {
    return (
        <Stack direction='row'>
            <Stack direction='column' >
                <StyledLabel>Start Date: </StyledLabel>
                <DateInput
                    type='date'
                    name='startDate'
                    sx={{ borderTopLeftRadius: '20px' }}
                    value={searchData.startDate}
                    onChange={handleChange}
                />
            </Stack>
            <Stack direction='column'>
                <StyledLabel>End Date: </StyledLabel>
                <DateInput
                    type='date'
                    name='endDate'
                    sx={{ borderTopRightRadius: '20px' }}
                    value={searchData.endDate}
                    onChange={handleChange}
                />
            </Stack>
        </Stack>
    )
}

export default CustomDateRangePicker