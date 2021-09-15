import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})

    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// @desc    Fetch product details
// @route   GET /api/products/:id
// @access  Public
export const getProductDetails = async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)

    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
