import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    favorites: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  },

  {
    timestamps: true,
  }
);

//static signup Method
UserSchema.statics.signup = async function (email, password, name, address) {
  if (!email || !password || !name || !address) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not Valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already is used");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    email,
    password: hash,
    address,
  });

  return user;
};

//------------------------------static method for login----------------------------------

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email !");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

export const User = mongoose.model("User", UserSchema);
