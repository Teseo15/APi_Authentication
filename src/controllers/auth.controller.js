import userSchema from "../models/User";
import jwt from 'jsonwebtoken';
import config from '../config';
export const signup = async (req,res) =>{
   const { username, email, password, roles} = req.body;

   const newUser = new userSchema({
       username,
       email,
       password: await userSchema.encryptPassword(password)
   })

   const savedUser = await newUser.save();
   const token = jwt.sign({id: savedUser._id}, config.SECRET,{
       //Expiración del token
       expiresIn: 86400
   })
   res.status(200).json({token});
}

export const signin = async (req,res) =>{
    res.json('signin')
}