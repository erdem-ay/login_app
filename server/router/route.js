const { Router } = require("express");
const router = Router();
const controller = require("../controllers/appController.js");
const Auth = require("../middleware/auth")

/** POST Methods */
router.route("/register").post(controller.register);
// router.route("/registerMail").post();
router.route("/authenticate").post((req, res) => res.end());
router.route("/login").post(controller.verifyUser, controller.login);

/** GET Methods */
router.route("/user/:username").get(controller.getUser);
router.route("/generateOTP").get(controller.genetareOTP);
router.route("/verifyOTP").get(controller.verifyOTP);
router.route("/createResetSession").get(controller.createResetSession);

/** PUT Methods */
router.route("/uptadeuser").put(Auth,controller.updateUser);
router.route("/resetPassword").put(controller.resetPassword);

module.exports = router;
