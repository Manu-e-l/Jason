const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName : {
            type: String,
            required: true,
            minLength : 1,
            maxLength: 55,
            trim: true
        },

}, 
{
    timestamps: true,
}
);

module.exports = mongoose.model("user", UserSchema);