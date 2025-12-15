const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('First GET API Call')
})

app.listen(3100, () => {
    console.log('Server is running on port 3000');
})