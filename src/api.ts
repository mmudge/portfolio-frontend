import axios from 'axios'
import store from '@/store'

const devBackendUrl = 'http://127.0.0.1:3000/'
const prodBackendUrl = 'https://mmudge-portfolio-backend.herokuapp.com/'

export default class Api {
  id!: number
  title!: string


  static getAllProjects() {
   let url = devBackendUrl 
    // const url = prodBackendUrl 

    url += 'projects'
    axios
      .get(url)
      .then((response: any) => {
        console.log('axios response', response)
        store.commit('setProjects', response.data)
      })
      .catch(error => console.log('error fetching projects', error))
  }

  static postSignInUser() {
    const url = devBackendUrl + 'login'

    axios.post(url, { user: {
        email: 'mike@mike.com',
        password: 'mikemike1'
      }},
       {
           headers: {


               'Content-Type': 'application/json',
               'Authorization': 'JWT'
           }
    })
      .then((response) => {
        console.log('post sign in response', response)
      })
      .catch((error) => {
        console.log('error signing in user', error);
      });
  }
}
