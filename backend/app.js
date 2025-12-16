const express = require('express');
const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, 'request')
    console.log('Middleware executed'); next();
})
app.get('/', (req, res) => {
    res.send('First GET API Call')
})
app.post('/tasks', (req, res) => {
    console.log(req.body)
    res.json({
        message: 'Task received', data: req.body
    })
})
app.listen(3100, () => {
    console.log('Server is running on port 3100');
})