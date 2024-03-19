import React from 'react'
import CountryInfo from './components/CountryInfo'
import WeatherInfo from './components/WeatherInfo'
import Stack from '@mui/material/Stack'
const WeatherDetails = () => {
    return (
        <Stack direction='column' justifyContent='space-between' height={'100%'}>
            <CountryInfo />
            <WeatherInfo />
        </Stack>
    )
}

export default WeatherDetails