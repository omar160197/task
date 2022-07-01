const router = require("express").Router();
const { def, addUser, auth, verifying } = require("../controllers");
const { addValidation } = require("../controllers/validator");

router.get("/", def);

// @Route POST /adduser
// @desc Create new User
router.post("/adduser", addValidation, addUser);

// @Route POST /auth
// @desc create auth-token
router.post("/auth", auth);


// @Route POST /verify
// @desc verify token
router.post("/verify", verifying);

module.exports = router;
