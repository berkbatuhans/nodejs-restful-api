import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
    },
    hashPassword: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

ContactSchema.method.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};