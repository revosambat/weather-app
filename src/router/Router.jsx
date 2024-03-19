import React, { createContext, useReducer } from 'react'
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../containers/dashboard'
import WeatherDetails from '../containers/weatherDetails';

export const WeatherContext = createContext([])
export const WeatherDispatchContext = createContext(null)


const Router = () => {
    const [value, dispatch] = useReducer(commonReducer, {})
    return (
        <BRouter>
            <WeatherContext.Provider value={value}>
                <WeatherDispatchContext.Provider value={dispatch}>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/weatherdetails' element={<WeatherDetails />} />
                    </Routes>
                </WeatherDispatchContext.Provider>
            </WeatherContext.Provider>
        </BRouter>
    )
}

export default Router

const commonReducer = (value, action) => {
    switch (action.type) {
        case 'storeData':
            return action.payload
    }
}