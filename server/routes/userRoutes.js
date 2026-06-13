import e from "express";
import {
  registerUser,
  getUserById,
  loginUser,
} from "../controller/userController.js";

const router = e.Router();
router.route("/register-user").post(registerUser);

router.route("/login").post(loginUser);

export default router;

/*
we import router so that server/index.js can import it and mount it onto the main app. 
app (server/index.js)
 └── uses "/api/users"
      └── router (userRoutes.js)
           ├── POST "/"        → addUser
           └── GET  "/:id"     → getUserById

           */
