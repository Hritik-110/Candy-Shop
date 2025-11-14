const express = require("express");
const router = express.Router();

const { createSweet, getAllSweets,updateSweet,
  deleteSweet,purchaseSweet ,restockSweet} = require("../controllers/sweetController");
const { authMiddleware } = require("../middleware/authMiddleware");

// Protected routes, but अभी हम auth middleware बाद में जोड़ेंगे
router.post("/", createSweet);
router.get("/", getAllSweets);
// Update sweet
router.put("/:id", updateSweet);

// Delete sweet
router.delete("/:id", deleteSweet);

// Purchase
router.post("/:id/purchase", authMiddleware, purchaseSweet);

// Restock (admin only)
router.post("/:id/restock", authMiddleware, restockSweet);

module.exports = router;
