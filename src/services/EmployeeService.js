import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://1611developer.github.io/employees/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEmployees() {
    return apiClient.get('/db.json')
  },
}
