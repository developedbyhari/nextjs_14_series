import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User