import express from "express";
import {
  getProducts,
  getProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts
} from "../Controllers/productControllers.js";
import { protect, admin } from "../Middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect , admin , createProduct);
router.route('/:id/reviews').post(protect , createProductReview)
router.route('/top').get(getTopProducts);
router.route("/:id").get(getProductsById).delete(protect, admin, deleteProduct).put(protect,admin,updateProduct)

export default router;
