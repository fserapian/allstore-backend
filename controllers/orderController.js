import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

/**
 * @desc   Get all orders
 * @route  GET /api/orders
 * @access Private / Admin
 */
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
        orders,
    });
});

/**
 * @desc   Create new order
 * @route  POST /api/orders
 * @access Private
 */
const createOrder = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('Order items list is empty');
    }

    const newOrder = new Order({
        orderItems: orderItems.map((item) => ({
            ...item,
            product: item._id,
            _id: undefined,
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    });

    const createdOrder = await newOrder.save();

    res.status(201).json(createdOrder);
});

/**
 * @desc   Get my orders
 * @route  GET /api/orders/mine
 * @access Private
 */
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
});

/**
 * @desc   Get order by id
 * @route  GET /api/orders/:id
 * @access Private / admin
 */
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(404);
        throw new Error('Order not found');
    }

    res.status(200).json(order);
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
