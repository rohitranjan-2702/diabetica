const mongoose =require("mongoose");
const { isEmail} = require("validator");
const bcrypt= require("bcrypt");

const dataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    created_at: { type: Date },
    updated_at: { type: Date }
});

// fire a function before doc saved todb
dataSchema.pre('save', async function (next) {
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    } 
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// fire a function after doc saved to db
dataSchema.post('save', function(doc, next) {
    
    console.log('new user created & saved', doc);
    next();
});

// static method to login user
dataSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('incorrect email address');
}

const Data = mongoose.model('data', dataSchema);

module.exports = Data;