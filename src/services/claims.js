import axios from 'axios'
const baseURL = 'http://localhost:3001/claims'

const getAll = () => {
  return axios.get(baseURL)
}

const create = (newObject) => {
  return axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseURL}/${id}`, newObject)
}

export default { getAll, create, update }