import React, { useContext } from 'react'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { WeatherContext } from '../../../router/Router'
import moment from 'moment-timezone'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

const CityHeading = styled(Typography)`
    color: #e3f2fd;
    font-size: 28px;
    font-weight: normal;

    @media(max-width:650px) {
        font-size: 16px;
    }
`
const CountryInfo = () => {
    const weatherData = useContext(WeatherContext)
    console.log(weatherData)
    return (
        <Stack sx={{ paddingTop: '5%' }} justifyContent='space-between' direction='row'>
            <CityHeading level='h2'>{weatherData.city_name}, {weatherData.country_code}</CityHeading>
            <Box>
                <CityHeading sx={{ textAlign: 'right' }}>
                    <LocationOnTwoToneIcon sx={{ fontSize: '50px' }} />
                </CityHeading>
                <CityHeading>

                </CityHeading>
                <CityHeading level='h3'>{moment().tz(weatherData.timezone)?.format('hh:mm A')}</CityHeading>
            </Box>
        </Stack>
    )
}

export default CountryInfo