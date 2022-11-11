import axios from 'axios'

export default {
  // searchDB: function() {
  //   return fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response => response.json())
  //  .then(json => console.log(json))
  // }

  qryUsers: () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  },

  qry: function() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
  }
}