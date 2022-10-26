const multiplesErrors = {

    addUserErrors(err)  {
        
        let errors = {firstName : ""}
        
        if (err.message.includes("required")) {
            errors.firstName = "Un nom est requis."
        }
        if (err.message.includes("failed")) {
            errors.firstName = "Un nom est requis."
        }
        
        if (err.message.includes("maximum")) {
            errors.firstName = "Le nom ne doit pas dépasser 55 caractères."
        }

        return errors

    }
}

module.exports = multiplesErrors