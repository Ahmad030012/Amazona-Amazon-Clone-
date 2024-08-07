import express  from "express";
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid , getOrders , updateOrderToDelivered } from "../Controllers/OrderControllers.js";
import { protect , admin} from "../Middleware/authMiddleware.js";

const router = express.Router()

router.route('/').post(protect, addOrderItems).get(protect , admin , getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect , getOrderById)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router