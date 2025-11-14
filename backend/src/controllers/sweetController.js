const Sweet = require("../models/Sweet");

exports.createSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    const sweet = await Sweet.create({
      name,
      category,
      price,
      quantity,
    });

    res.status(201).json(sweet);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.status(200).json(sweets);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

// UPDATE SWEET
exports.updateSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;

    const updated = await Sweet.findByIdAndUpdate(
      sweetId,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

// DELETE SWEET
exports.deleteSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;

    const deleted = await Sweet.findByIdAndDelete(sweetId);

    if (!deleted) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.status(200).json({ message: "Sweet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};


//purchase sweet
exports.purchaseSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;
    const { quantity } = req.body;

    const sweet = await Sweet.findById(sweetId);
    if (!sweet) return res.status(404).json({ message: "Sweet not found" });

    if (sweet.quantity < quantity) {
      return res.status(400).json({ message: "Not enough stock available" });
    }

    sweet.quantity -= quantity;
    await sweet.save();

    res.status(200).json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Restock Controller (Admin Only)
exports.restockSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;
    const { quantity } = req.body;

    // Check admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admin can restock" });
    }

    const sweet = await Sweet.findById(sweetId);
    if (!sweet) return res.status(404).json({ message: "Sweet not found" });

    sweet.quantity += quantity;
    await sweet.save();

    res.status(200).json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//search sweet 
exports.searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    let filter = {};

    // Name search (case-insensitive, partial match)
    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Price range filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const sweets = await Sweet.find(filter);
    res.status(200).json(sweets);

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
