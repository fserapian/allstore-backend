import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

/**
 * @desc   Get all orders
 * @route  GET /api/orders
 * @access Private / Admin
 */
const getOrders = asyncHandler(async (req, res) => {
    res.send('get all orders');
});

/**
 * @desc   Create new order
 * @route  POST /api/orders
 * @access Private
 */
const createOrder = asyncHandler(async (req, res) => {
    res.send('create new orders');
});

/**
 * @desc   Get my orders
 * @route  GET /api/orders/mine
 * @access Private
 */
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my orders');
});

/**
 * @desc   Get order by id
 * @route  GET /api/orders/:id
 * @access Private / admin
 */
const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by id');
});

/**
 * @desc   Update order to paid
 * @route  PUT /api/orders/:id/pay
 * @access Private
 */
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update order to paid');
});

/**
 * @desc   Update order to delivered
 * @route  PUT /api/orders/:id/deliver
 * @access Private / Admin
 */
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update order to delivered');
});

export {
    getOrders,
    createOrder,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
};
