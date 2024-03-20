import React, { useContext, useState } from 'react'
import Stack from '@mui/material/Stack'
import DashboardHeader from './components/DashboardHeader'
import DashboardContent from './components/DashboardContent'
import { get } from '../../api/Api'
import { useNavigate } from 'react-router-dom'
import { WeatherDispatchContext } from '../../router/Router'
import moment from 'moment-timezone'


const Dashboard = () => {
    const [searchData, setSearchData] = useState({
        cityName: '',
        startDate: '',
        endDate: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useContext(WeatherDispatchContext)
    const handleChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value })
        setError('')
    }
    const handleGetWeather = async () => {
        const { cityName, startDate, endDate } = searchData
        console.log(cityName, startDate, endDate)
        if (moment(startDate).isAfter(moment(endDate))) {
            setError('Start Date should be less than End Date')
            return
        }
        if (moment(endDate).isAfter(moment()) || moment(startDate).isAfter(moment())) {
            setError('End Date should be less than Current Date')
            return
        }
        let query = {
            start_date: startDate,
            end_date: moment(endDate).add(1, 'day').format('YYYY-MM-DD'),
            city: cityName,
        }
        await get('history/energy', query)
            .then(res => {
                if (res.data.data[0]?.lat == 0 || res.data.data[0]?.lon == 0 || !res.data.data.length) return setError("City not found!")
                dispatch({
                    type: 'storeData',
                    payload: res.data
                })
                navigate('/weatherdetails')
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error || err.message)
            })
    }
    return (
        <Stack justifyContent='space-around' direction='column' alignItems="center" sx={{ height: '100%', }}>
            <DashboardHeader />
            <DashboardContent searchData={searchData} handleChange={handleChange} handleGetWeather={handleGetWeather} error={error} />
        </Stack>
    )
}

export default Dashboard