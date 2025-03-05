const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log("Database connection error:", e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //create a new document
    // const newUser = await User.create({
    //   name: "Updated User",
    //   email: "updated@gmail.com",
    //   age: "75",
    //   isActive: true,
    //   tags: ["developer"],
    // });
    const newUser = new User({
      name: "Raj Mukherjee",
      email: "raj@gmail.com",
      age: "40",
      isActive: true,
      tags: ["developer", "designer", "manager"],
    });
    await newUser.save();
    console.log("Created new user", newUser);

    const allUsers = await User.find({});
    console.log(allUsers);

    const getUserOfActiveFalse = await User.find({ isActive: true });
    console.log(getUserOfActiveFalse);

    const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    console.log(getJohnDoeUser);

    const getLastCreatedUserByUserId = await User.findById(newUser._id);
    console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");

    // - don't include the id property
    const selectedFields = await User.find().select("name email -_id");
    console.log(selectedFields);

    const limitedUsers = await User.find().limit(5).skip(1);
    console.log(limitedUsers);

    // 1 -> ascending oreder
    // -1 -> descending oreder
    const sortedUsers = await User.find().sort({ age: 1 });
    console.log(sortedUsers);

    const countDocuments = await User.countDocuments({ isActive: true });
    console.log(countDocuments);

    const deletedUser = await User.findByIdAndDelete(newUser._id);
    console.log("deleted user ->", deletedUser);

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("updated user", updateUser);
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();