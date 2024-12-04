const express = require("express");
const router = express.Router();
const Blogmodel = require("../models/BlogSchema.js");

router.get("/", (req, res) => {
  res.send("hello world");
});
router.get("/getData", (req, res) => {});
router.get("/getAllData", async (req, res) => {
  try {
    const data = await Blogmodel.find().sort({_id:-1});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "error finding blog" });
  }
});
router.post("/blog", async (req, res) => {
  const { title, desc } = req.body;
  try {
    const resp = await Blogmodel({ title, desc });
    const data = await resp.save();
    res.status(200).json(data );
  } catch (error) {
    res.status(500).json({ error: "error saving blog" });
  }
});
router.patch("/blog/:id", async (req, res) => {
  const id = req.params.id;
  const { title, desc}=req.body;
  try {
    const updatedBlog = await Blogmodel.findByIdAndUpdate(id,{title,desc} , {
      new: true,
    });
    if (!updatedBlog)
      return res.status(404).json({ message: `Blog not found` });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "error updating blog", error });
  }
});
router.delete("/blog/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBlog = await Blogmodel.findByIdAndDelete(id);
    if (!deleteBlog) return res.status(404).json({ message: `Blog not found` });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error deleting blog", error });
  }
});

module.exports = router;
