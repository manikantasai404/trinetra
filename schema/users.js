const mongoose = require("mongoose");

const usersSchema = mongoose.model("users",{
    firstName: {
        type: String,
        required: false,
        trim: true,
      },
    lastName: {
        type: String,
        required: false,
        trim: true,
      },
    email: {
        type: String,
        required: false,
        trim: true,
      }
})

//export default mongoose.model('users', usersSchema);
module.exports = usersSchema;