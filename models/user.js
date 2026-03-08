const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});


// handle CommonJS vs ESM default export interop
const _plm = (typeof passportLocalMongoose === 'function')
    ? passportLocalMongoose
    : (passportLocalMongoose && passportLocalMongoose.default);

if (typeof _plm !== 'function') {
    throw new Error('passport-local-mongoose did not export a plugin function; check the package or import.');
}

userSchema.plugin(_plm);

module.exports = mongoose.model('User', userSchema); 