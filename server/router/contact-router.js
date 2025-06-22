// const express = require('express');
// const router = express.Router();
// const validate = require("../middlewares/validate-middleware");
// const contactcontrollers = require("../controllers/contact-controller");
// const contactForm = require("../controllers/contact-controller");
// const contactSchema = require("../validators/contact-validator");

// //router.route("/contact").post(contactForm);
// router.route("/contact").post(validate(contactSchema), contactcontrollers.contactForm);
// module.exports = router;


const express = require('express');
const router = express.Router();
const validate = require("../middlewares/validate-middleware");

const contactForm = require("../controllers/contact-controller");
const contactSchema = require("../validators/contact-validator");

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;