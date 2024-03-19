import React, { useContext, useState } from 'react'
import Stack from '@mui/material/Stack'
import DashboardHeader from './components/DashboardHeader'
import DashboardContent from './components/DashboardContent'
import { get } from '../../api/Api'
import { useNavigate } from 'react-router-dom'
import { WeatherContext, WeatherDispatchContext } from '../../router/Router'


const Dashboard = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useContext(WeatherDispatchContext)
    const handleChange = (e) => {
        setValue(e.target.value)
        setError('')
    }
    const handleGetWeather = async (url = 'current') => {
        let query = {
            start_date: '2024-03-18',
            end_date: '2024-03-20',
            city: value,
            // includes: 'minutely'
        }
        await get('history/energy', query)
            .then(res => {
                if (res.data.data[0].lat == 0 || res.data.data[0].lon == 0) return setError("City not found!")
                dispatch({
                    type: 'storeData',
                    payload: res.data
                })
                navigate('/weatherdetails')
            })
            .catch(err => setError(err.response.message || err.message))
    }
    return (
        <Stack justifyContent='space-around' direction='column' alignItems="center" sx={{ height: '100%', }}>
            <DashboardHeader />
            <DashboardContent value={value} handleChange={handleChange} handleGetWeather={handleGetWeather} error={error} />
        </Stack>
    )
}

export default Dashboard