const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
//const timeZone = require('mongoose-timezone');

const userSchema = new Schema({
    googleId: { type: String, required: false },
    facebookId: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: false },
    gender: { type: String, required: false },
    phone: { type: String, required: false },
    birthday: { type: String, default: Date.now },
    creationDate: { type: Date, default: Date.now }
});

//userSchema.plugin(timeZone, { paths: ['creationDate'] });

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(13);
    const hash = bcrypt.hash(password, salt);
    return hash;
}

userSchema.methods.matchPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);