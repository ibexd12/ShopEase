const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Product Service!');
});

app.listen(3001, () => console.log('Product Service running on port 3001'));
