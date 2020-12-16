import axios from 'axios'
import store from '@/store'

export default class Project {
  id!: number
  title!: string

  static fetchAll() {
    // const backendUrl = 'http://127.0.0.1:3000/projects'
    const backendUrl = 'https://mmudge-portfolio-backend.herokuapp.com/projects'
    // tcp://localhost:3000
    axios
      .get(backendUrl)
      // .then((response: any) => setProjects(res.data))
      .then((response: any) => {
        console.log('axios response', response)
        store.commit('setProjects', response.data)
      })
      .catch(error => console.log('error fetching projects', error))
  }
}
