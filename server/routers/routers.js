const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
// const auth = require("../middle-wares/auth");
 
router.post("/sign_up",controller.sign_up);
router.post("/log_in",controller.log_in);

router.post("/tasks",controller.add_task);
router.get("/tasks",controller.get_tasks);
router.patch("/tasks",controller.delete_task);
router.put("/tasks",controller.update_task);



module.exports = router;