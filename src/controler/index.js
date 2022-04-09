var axios = require('axios');
var data = JSON.stringify({
  "_id": 1,
  "class": "",
  "task": "taskName",
  "date": "05/03/2022",
  "status": "pending"
});

var config = (URL, data) => {
  return {
    method: 'post',
    url: 'localhost:3005/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }
}

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
