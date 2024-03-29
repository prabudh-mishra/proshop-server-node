import User from '../models/userModel.js'

import generateToken from '../utils/generateToken.js'

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
export const authUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ email: username })

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid Email or Password')
    }

    // res.status(200).json({ username, password })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
