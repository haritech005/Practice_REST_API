import { v4 as uuidv4 } from 'uuid';

let users = []

export const createuser = (req,res)=>{
    console.log("Users were added")
    const user = req.body;
    const userId = uuidv4()
    const userWithID = {...user,id:userId}
    users.push(userWithID)
    res.send("Users were added to the database")
 }

 export const getUsers = (req,res)=>{
    res.send(users)
}

export const getUserId = (req,res)=>{
    const {id} = req.params
    const foundUser = users.find((user)=> user.id === id)
    console.log(req.params)
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    const {id} = req.params
     users = users.filter((user) => user.id !== id)
    res.send(`user with ${id} is deleted`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=> user.id === id)
    const {fname,lname,age} = req.body;
    if(fname){
        user.fname = fname
    }
    if(lname){
        user.lname = lname
    }
    if(age){
        user.age = age;
    }
    res.send("User were updated")
}
