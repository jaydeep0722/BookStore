import ORDER from "../models/Ordermodel.js";

const createOrder = async (req, res) => {
  try {
    const newOrder = await ORDER(req.body);
    await newOrder.save();
    res.status(200).json({
      success: true,
      message: "Order created Success",
      order: newOrder,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const AllOrders = await ORDER.find({ email }).sort({ createdAt: -1 });
    if (!AllOrders) {
      return res.status(400).json({
        success: false,
        message: "All Orders get Failed",
      });
    }
    res.status(200).json({
      success: true,
      message: "All Orders get Success",
      orders: AllOrders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { createOrder, getAllOrdersByEmail };
