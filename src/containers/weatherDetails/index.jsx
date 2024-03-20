import React, { useContext } from 'react'
import CountryInfo from './components/CountryInfo'
import WeatherInfo from './components/WeatherInfo'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { WeatherContext } from '../../router/Router'

const StyledText = styled(Typography)`
    color: #efefef;
    font-size: 48px;
    text-shadow: 2px 2px 30px red;

    @media(max-width:650px) {
        font-size: 24px;
    }
`
const WeatherDetails = () => {
    const weatherData = useContext(WeatherContext)
    if (Object.keys(weatherData).length == 0) {
        return (
            <Stack justifyContent='center' alignItems='center' height='100%'>
                <Box>
                    <StyledText>
                        No City Selected, No data found!
                    </StyledText>
                </Box>
            </Stack>
        )
    }
    return (
        <>
            <Stack direction='column' justifyContent='space-between' height={'100%'}>
                <CountryInfo />
                <WeatherInfo />
            </Stack>
        </>
    )
}

export default WeatherDetails