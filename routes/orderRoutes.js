import express from 'express';
import {
    getOrders,
    createOrder,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, admin, getOrders).post(protect, createOrder);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
