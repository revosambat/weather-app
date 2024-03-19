import axios from 'axios'

export const get = async (url, query) => {
    let base_url = import.meta.env.VITE_API_BASE_URL + url
    let api_key = import.meta.env.VITE_API_KEY
    let commonUrl = `${base_url}?key=${api_key}`
    let queryString = Object.keys(query).reduce((acc, val) => {
        acc = acc + (query[val] ? `&${val}=${query[val]}` : '')
        return acc
    }, '')
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: commonUrl + queryString,
        }).then(res => resolve(res))
            .catch(err => reject(err))
    })
}