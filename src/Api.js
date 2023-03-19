import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SPOONACULAR_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: `${process.env.REACT_APP_SPOONACULAR_API_KEY}`,
  }
})

export default instance