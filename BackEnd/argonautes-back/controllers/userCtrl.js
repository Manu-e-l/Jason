const userModel = require("../models/userModel.js");
const multiplesErrors = require("../utils/errors.utils");


const userController = {
    
    addUser: async(req,res) => {
        let firstName = req.body.firstName
        
        try {
            const newUserModel =  await userModel.create({firstName})
            console.log("Argonaute ajouté", newUserModel.firstName)
            res.status(200).json(newUserModel)
            
        } catch (err) {
            console.log(err)
            const errors = multiplesErrors.addUserErrors(err)

            res.status(401).json(errors)
            
        }
        
    },

    getUser : async(req,res) => {
         const ArgonauteUsers = await userModel.find()
         if (ArgonauteUsers.length == 0) {
            
            res.status(404).json({message : "Aucun Argonaute n'a encore postulé. Soit le premier à nous rejoindre !" })

         }else{
             res.status(200).send(ArgonauteUsers)

         }
         
    }

    
} 

module.exports = userController