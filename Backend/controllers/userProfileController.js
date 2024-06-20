import { User } from "../Models/User.js";

export const getUserProfile = async (req, res) => {
  // const userId = req.user._id;

  const userId = req.userId;

  console.log(" from  usercontrolller ", userId);

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};

//------------------------------UpdateAddress----------------

export const updateAddress = async (req, res) => {
  const userId = req.userId; // Assuming userId is added to the request by your auth middleware
  const { address } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { address },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update address" });
  }
};

//-------------------------DeleteUser -----------------------

export const deleteUser = async (req, res) => {
  const userId = req.userId; // Assuming userId is added to the request by your auth middleware

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};