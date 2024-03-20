# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Getting Started With Weather App:

Installation:

- create the .env.local file to store API_BASE_URL and API_KEY, look up for .env.example file for syntax.
- generate the api key by following the document https://www.weatherbit.io/api
- `npm install` [to install all the necessary packages]
- `npm run dev` [to run locally]

Title: Weather History

- takes two 3 search parameter, start date, end date and city name
- redirect the page to weather details after successfull searching
- weather details holds tabs, weather basic info and detail info
- weather basic info is card based layout, clicking on particular card redirect to weather detail (another tab for detail about weather on particular date)

Technology: Vite, Context Provider with Reducer, Material UI/Labs, momentjs for time manipulation and so on.
