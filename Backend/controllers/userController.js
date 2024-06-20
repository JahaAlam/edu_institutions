import { User } from "../Models/User.js";
import { createToken } from "../jwt/jwt.js";

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("userlogin data received:", email, password);
  try {
    const user = await User.login(email, password);
    //create Token
    const token = createToken(user._id);
    console.log("token created form login controller", token);

    res.status(200).json({ token, email });
    //res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// -------------------------   ------         signupUser         ------------        -------------------
const signupUser = async (req, res) => {
  const { email, password, name, address } = req.body;

  try {
    const user = await User.signup(email, password, name, address);
    //create Token
    const token = createToken(user._id);

    res.status(201).json({ token, email });
    //res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//-------------------getFavorite----------------------

const getFavorite = async (req, res) => {
  const { id, favorite } = req.body;
  const userId = req.user._id; // Assume you get user ID from auth middleware

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (favorite) {
      if (!user.favorites.includes(id)) {
        user.favorites.push(id);
      }
    } else {
      user.favorites = user.favorites.filter(favId => favId !== id);
    }

    await user.save();
    res.status(200).json({ message: 'Favorite status updated', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export { getFavorite, loginUser, signupUser };
