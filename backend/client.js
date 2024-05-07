const axios = require('axios')

const data = {
  name: 'Hoang Phuc',
  age: 19
}

axios.post('http://0.0.0.0:3000/', data)
.then(res => {
  console.log('Respone from sever', res.data);
}).catch(err => console.log(err)); 