const getAllBooks = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
