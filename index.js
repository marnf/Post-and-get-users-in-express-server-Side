const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const users =[
    { id:1, name:'shabana', email:'shabana@gmail.com'},
    { id:2, name:'shonkor', email:'shonkor@gmail.com'},
    { id:3, name:'shihab', email:'shihab@gmail.com'},
    { id:4, name:'sushmita',email:'sushmita@gmail.com'}
]

app.get('/', (req, res) => {
  res.send('Hello Worgggggggld!')
})

app.get('/users', (req, res) =>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = (users.length)+1;
    users.push(newUser);
    res.send(newUser)
    console.log(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})