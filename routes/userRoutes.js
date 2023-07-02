import express from 'express';
import {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUser,
    deleteUser,
    updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/login').post(loginUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

export default router;
