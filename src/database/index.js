

import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anjima730:Anjima4045@cluster0.oe9fa.mongodb.net/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log("Not entering db");
    console.log(e);
  }
};

export default connectToDB;