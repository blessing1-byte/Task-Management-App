import e from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controller/userController.js";
import authHandler from "../middleware/authHandler.js";

const router = e.Router();
router.route("/register-user").post(registerUser);

router.route("/login").post(loginUser);

router.route("/profile").get(authHandler, getUserProfile);

export default router;

/*
we import router so that server/index.js can import it and mount it onto the main app. 
app (server/index.js)
 └── uses "/api/users"
      └── router (userRoutes.js)
           ├── POST "/"        → addUser
           └── GET  "/:id"     → getUserById

           */
