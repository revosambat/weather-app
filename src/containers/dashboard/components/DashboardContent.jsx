import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Snackbar } from '@mui/material'
import { Input, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import CustomDateRangePicker from '../../../components/CustomDateRangePicker'

const SearchInput = styled(Input)`
    width: 40vw;
    background-color: #fefefefe;
    opacity: 0.5;
    padding: 10px;
    color: #1a237e;
    font-size: 24px;
    margin-bottom: 20px;

    @media(max-width:650px) {
        width: 60vw;
        height: 8vh;
        font-size: 20px;
    }
`

const StyledButton = styled(Button)`
    width: 20vw;
    height: 3vw;
    border: 3px #fefefefe solid;
    color: #fefefefe;

    @media(max-width:650px) {
        width: 60vw;
        height: 5vh;
        font-size: 14px;
    }
`

const DashboardContent = ({ searchData, handleChange, handleGetWeather, error }) => {
    return (
        <Box>
            <Stack justifyContent='center' direction='column' alignItems='center'>
                <CustomDateRangePicker searchData={searchData} handleChange={handleChange} />
                <SearchInput name='cityName' placeholder='Enter the City' value={searchData.cityName} onChange={handleChange} error={!!error} />
                <StyledButton onClick={handleGetWeather} variant='outlined' sx={{
                    ':hover': {
                        borderWidth: '3px',
                        borderColor: '#1a237e',
                        color: '#1a237e'
                    }
                }}>Get Weather</StyledButton>
            </Stack>
            <Snackbar
                open={!!error}
                onClose={handleChange}
                message={error}
            />
        </Box>
    )
}

export default DashboardContent