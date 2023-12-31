const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  tilte: String,
  body: String,
  category: String,
  likes: Number,
  tags: Array,
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);
const newpost = new Post({
  title: "Mongoose Post",
  body: "A post created by mongoose model",
  category: "mongoose library",
  likes: Math.floor(Math.random() * 100),
  tags: ["kowsik", "arafat"],
});
const savepost = async () => {
  //await newpost.save();
  try {
    await Post.deleteMany({ tilte: "Mongoose Post" });
    console.log("Delete success");
  } catch (error) {
    console.log(error);
  }

  const posts = await Post.findOne();
  console.log(posts);
};

module.exports = { savepost };
