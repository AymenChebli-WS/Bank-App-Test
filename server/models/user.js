import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    secondaryPhoneNumber: {type: String, required: false},
    password: {type: String, required: false}, //false incase of other registration methods
    userType: {type: String, required: true},
    id: {type: String},
})

export default mongoose.model("User", userSchema);
