import Axios from 'axios'

const {BASE_URL} = process.env

const Services = Axios.create({
    baseURL: BASE_URL
})

export default Services