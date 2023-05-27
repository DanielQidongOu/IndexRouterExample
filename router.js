const express = require('express')

const router = express.Router();

let users = [
    {name: 'Ben', age: '20'},
    {name: 'John', age: '30'},
    {name: 'Chris', age: '45'},
    {name: 'Jane', age: '35'},
];

//get user list       /api/users
router.get('/users', (req,res)=>{
    res.send({
        status: 0,
        msg: 'get users succeed!',        
        data: users
    });
})

//post user       /api/user
router.post('/user', (req, res)=>{
    const user = req.body;
    console.log('body', user);    
    users.push(user);
    res.send({
        status: 0,
        msg: "Post user succeed!",        
        data: users,
    })
})

//delete list           /api/delete
router.delete('/delete', (req,res)=>{
    users = [];
    res.send ({
        status: 0,
        msg: 'Delete users succeed!',
        data: users,
    })
})
module.exports = router;