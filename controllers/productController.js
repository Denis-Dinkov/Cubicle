const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home", { layout: false });
});

router.get("/create", (req, res) => {
  res.render("create", { layout: false });
});

router.get("*", (req,res) => {
  res.render('404', {layout: false})
})

module.exports = router