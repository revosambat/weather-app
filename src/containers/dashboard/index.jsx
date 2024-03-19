import React from 'react'
import Stack from '@mui/material/Stack'
import DashboardHeader from './components/DashboardHeader'
import DashboardContent from './components/DashboardContent'

const Dashboard = () => {
    return (
        <Stack justifyContent='space-around' direction='column' alignItems="center" sx={{ height: '100%', }}>
            <DashboardHeader />
            <DashboardContent />
        </Stack>
    )
}

export default Dashboard