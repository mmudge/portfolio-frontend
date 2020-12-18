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

    console.log('token in local storage', localStorage.token)

    url += 'projects'
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT Bearer ${localStorage.token}`
        }
  })
      .then((response: any) => {
        console.log('GET projects response', response.data)
        store.commit('setProjects', response.data)
      })
      .catch(error => console.log('error fetching projects', error))
  }

  static postSignInUser() {
    const url = devBackendUrl + 'login'

    axios.post(url, 
      { user: {
        email: 'mike@mike.com',
        password: 'mikemike1'
      }},
       {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT'
          }
    })
      .then((response) => {
        console.log('POST sign in response', response)
        localStorage.setItem('token', response.data.token)
      })
      .catch((error) => {
        console.log('error signing in user', error);
      });
  }
}



// static userJoin(email, username, password, password_confirmation) {
//   return fetch("http://localhost:3000/signup", {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "JWT"
//     },
//     body: JSON.stringify({
//       user: {
//         email: email,
//         username: username,
//         password: password,
//         password_confirmation: password_confirmation
//       }
//     })
//   })
//     .then(response => {
//       return response.json();

//     }).then((response) => {
//       console.log('Joined with', response.email, password)
//       return response;
//     })
//     .catch(() => {
//       store.commit("setUser", null);
//       localStorage.token = null;
//     });
// }

// static userSignOut() {
//   return fetch("http://localhost:3000/logout", {
//     method: "DELETE",
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "JWT"
//     },
//     body: JSON.stringify(store.state.user)
//   }).then((result) => {
//     store.commit("setUser", null);
//     localStorage.token = null;
//     console.log('logged out')
//     return result
//   });
// }


// static getLoggedInUser() {

//   return fetch(`http://localhost:3000/current_user`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     }
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(response => {
//       if (response.errors) {
//         store.commit('setUser', null)
//         localStorage.token = null
//         return response.errors
//       } else {
//         store.commit("setUser", response);
//         console.log('User logged in as ', response.email)
//         return response
//       }

//     })
//     .catch((e)  => {
//       console.log("back end broke", e)
//       return e
//     })
// }



// return fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
//   method: "PUT",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.token}`
//   },
//   body: JSON.stringify(post)
// })
//   .then(response => {
//     return response.json();
//   })
//   .then(response => {
//     return response
//   });
// }
