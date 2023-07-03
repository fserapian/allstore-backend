import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

/**
 * @desc   Auth user
 * @route  POST /api/users/login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await user.checkPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
        })
    } else {
        res.status(401);
        throw new Error('Incorrect email or password');
    }
});

/**
 * @desc   Register user
 * @route  POST /api/users
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
    res.send('Register user');
});

/**
 * @desc   Logout user / Clear cookie
 * @route  POST /api/users/logout
 * @access Private
 */
const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout user');
});

/**
 * @desc   Get user profile
 * @route  GET /api/users/profile
 * @access Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('Get user profile');
});

/**
 * @desc   Update user profile
 * @route  PUT /api/users/profile
 * @access Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Update user profile');
});

/**
 * @desc   Get user by ID
 * @route  GET /api/users/:id
 * @access Private / Admin
 */
const getUser = asyncHandler(async (req, res) => {
    res.send('Get user by ID');
});

/**
 * @desc   Delete user
 * @route  DELETE /api/users/:id
 * @access Private / Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
    res.send('Delete user');
});

/**
 * @desc   Update user
 * @route  PUT /api/users/:id
 * @access Private / Admin
 */
const updateUser = asyncHandler(async (req, res) => {
    res.send('Update user');
});

export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUser,
    deleteUser,
    updateUser,
};
