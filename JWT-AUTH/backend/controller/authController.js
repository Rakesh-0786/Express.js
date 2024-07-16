const { sign } = require("jsonwebtoken");
const userModel = require("../model/userSchema");
const emailValidator=require('email-validator');
const JWT= require('jsonwebtoken');
const bcrypt=require('bcrypt');


const signup= async (req,res, next) =>{
const{name,email, password, confirmPassword}=req.body;
// login without keys:
// console.log(name,email,password,confirmPassword);

// logging with keys
    console.log({name,email,password,confirmPassword});


 
     if(!name || !email || !password || !confirmPassword){
     return res.status(400).json({
        success:false,
        message:"Every field is required"
    })

   }

//    check if email is not valid

     const validEmail=emailValidator.validate(email);
     if(!validEmail){
        return res.status(400).json({
            success:false,
            message:"Please Enter a valid email id"
        })
     }

      if(password !==confirmPassword){
        return res.status(400).json({
            success:false,
            message:"password and confirm password doesn't match"
        })
      }

       // Check if a user with the same name  already exists
       const existingUser = await userModel.findOne({ name});
       if (existingUser) {
           return res.status(400).json({
               success: false,
               message: "This Accounts is already  exist with provided name"
           });
       }


    // Check if a user with the same  password already exists
    const existingPassword = await userModel.findOne({password});
    if (existingPassword) {
        return res.status(400).json({
            success: false,
            message: "This password is already used"
        });
    }



   try{
    const userInfo =userModel(req.body);
    const result=await userInfo.save();

    return res.status(200).json({
    succes:true,
    data:result
  });

} catch(e) {
    if(e.code===11000){
        return res.status(400).json({
            success:false,
            message:"Account already exists with provided email id"
        })
    }
    return res.status(400).json({
        success:false,
        message:e.message
     })
     
   }

 }


//  for signIn

const signin =async (req,res) =>{
      const{email, password}=req.body;

      if(!email || !password) {
        return res.status(400).json({
            success:false,
            message:"Every field is mendatory"
        })
      }

      try{
        const user =await userModel
        .findOne({
          email
        })
        .select("+password");
  
        if(!user || !(await bcrypt.compare(password , user.password))){
          return res.status(400).json({
              success:false,
              message:"invalid credentials"
          })
        }
  
      //   GENERATE JWT TOKENS:
  
      const token = user.jwtToken();
      user.password=undefined;
  
      const cookieOption ={
          maxAge: 24*60*60*1000,
          httpOnly:true
      };
  
      res.cookie("token", token, cookieOption);
      res.status(200).json({
          success:true,
          data:user
      })

     } catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
      }
}

// for getting the user information.

const getUser=async (req,res,next) =>{
    const userId=req.user.id;
    try{
        const user=await userModel.findById(userId);
        return res.status(200).json({
            success:true,
            data:user
        });
    } catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

//  for logout:-

const logout = (req,res) => {
    try{
        const cookieOption= {
            expires:new Date(),
            httpOnly:true
        };
        res.cookie("token", null, cookieOption);
        res.status(200).json({
            success:true,
            message:"Logged Out"
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

module.exports={
    signup,
    signin,
    getUser,
    logout
}




