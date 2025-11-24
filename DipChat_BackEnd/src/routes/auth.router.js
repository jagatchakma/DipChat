import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Sugnup success");
})

router.get("/signin", (req, res) => {
  res.send("Sign in Success");
})

router.get("/logout", (req, res)=>{
  res.send("Logout Success");
})


export default router;