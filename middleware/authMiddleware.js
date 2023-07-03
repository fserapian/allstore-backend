import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findOne({ _id: decoded.userId }).select('-password');
            next();
        } catch (err) {
            console.log('Error:', err);
            res.status(401);
            throw new Error('Not authorized, failed token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

const admin = asyncHandler((req, res, next) => {
    if (req.user && req.user.isAdmin) {
        console.log('IS ADMIN');
        next();
    } else {
        console.log('NOT AN ADMIN');
        res.status(401);
        throw new Error('Not authorized as admin');
    }
});

export { protect, admin };
