import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const hasher = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (error) {
        console.log(error);
    }
}

const passChecker = async (plainPass, hashedPass) => {
    try {
        const check = await bcrypt.compare(plainPass, hashedPass);
        return check
    } catch (error) {
        console.log(error);
    }
}

const tokenGenerator = (user) => {
    try {
        const token = jwt.sign(user, process.env.JWT_SECRET);
        return token;
    } catch (error) {
        console.log(error);
    }
}

const tokenChecker = (token, secret) => {
    try {
        const user = jwt.verify(token, secret);
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    }
}

export {hasher, passChecker, tokenGenerator, tokenChecker};