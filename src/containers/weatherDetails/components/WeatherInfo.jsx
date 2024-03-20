import React, { useContext, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { WeatherContext } from '../../../router/Router'
import moment from 'moment-timezone'
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import CustomTable from '../../../components/Table'
import { fieldDesc } from '../../../contants/fieldDescription'

const StyledBox = styled(Box)`
    height: 300px;
    width: 100%;
    background-color: #64b5f6;
    opacity: 0.5;
    border-radius: 60px;
    box-shadow: 0px 0px 20px 20px #64b5f6;
`
const StyledGridBox = styled(Box)`
    height: 300px;
    width: 100%;
    background-color: #64b5f6;
    opacity: 0.5;
    border-radius: 60px;
    box-shadow: 0px 0px 20px 20px #64b5f6;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 20px;
    justify-content: space-evenly;
    overflow: scroll;
    padding: 20px;
    @media(max-width:650px){
        grid-template-columns: repeat(2, 50%);
    }

`
const StyledTab = styled(Tab)`
    color: #e3f2fd;
    width: 33.33%;
    &:hover {
        font-size: 16px;
        background-color: #90caf9;
        border-radius: 7px;
    }
    &:focus {
        background-color: #1565c0;
        border-radius: 7px;
        color: #e3f2fd;
        opacity: 0.5;
    }
`

const StyledText = styled(Typography)`
    font-size: 18px;
    color: #e3f2fd;
    font-weight: bold;
    text-align: center;
    margin-top: 3%;
    @media(max-width:650px) {
        font-size: 14px;
    }
`

const StyledContentText = styled(Typography)`
    font-size: 18px;
    color: #e3f2fd;
    font-weight: bold;
    margin-top: 3%;
    padding: 5px;
    @media(max-width:650px) {
        font-size: 14px;
    }
`

const StyledCard = styled(Card)`
    border-radius: 20%;
    height: 290px;
    background-color: #424242;
    padding: 10px;
    &:hover {
        scale: 1.0;
        z-index: 2;
        box-shadow:0 0 30px 30px #212121;
    }
    @media(max-width:650px) {
        height: 190px;
    }
`

const WeatherInfo = () => {
    const [value, setValue] = useState('1')
    const [rows, setRows] = useState([])
    const weatherData = useContext(WeatherContext)
    const { data } = weatherData
    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'value', label: 'Value', minWidth: 100 },
        { id: 'unit', label: 'Unit', minWith: 100 }
    ]

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    const showDetails = (detail) => {
        console.log(detail)
        let rowArr = Object.keys(detail).map(detailKey => {
            return createData(fieldDesc[detailKey]?.name, detail[detailKey], fieldDesc[detailKey]?.unit)
        })
        setRows(rowArr)
        setValue('2')
    }

    const createData = (name, value, unit) => {
        return { name, value, unit }
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                    <StyledTab label="Basic Weather" value="1" />
                    <StyledTab label="Weather Details" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <StyledGridBox>
                    {data.map((val, idx) => (
                        <StyledCard key={val.date} onClick={() => showDetails(val)}>
                            <StyledText>{moment(val.date).format('MMMM D, YYYY')}</StyledText>
                            <CardContent>
                                <Stack direction='row' justifyContent='space-around'>
                                    <ThermostatAutoIcon sx={{ color: '#e3f2fd', fontSize: '60px' }} />
                                    <StyledContentText>{val.temp}℃</StyledContentText>
                                </Stack>
                                <Stack direction='row' justifyContent='space-around'>
                                    <AirIcon sx={{ color: '#e3f2fd', fontSize: '60px' }} />
                                    <StyledContentText>{val.max_wind_spd}m/s</StyledContentText>
                                </Stack>
                                <Stack direction='row' justifyContent='space-around'>
                                    <CloudIcon sx={{ color: '#e3f2fd', fontSize: '60px' }} />
                                    <StyledContentText>{val.clouds}%</StyledContentText>
                                </Stack>
                            </CardContent>
                        </StyledCard>))}
                </StyledGridBox>
            </TabPanel>
            <TabPanel value="2">
                <CustomTable columns={columns} rows={rows} />
            </TabPanel>
        </TabContext>
    )
}

export default WeatherInfo