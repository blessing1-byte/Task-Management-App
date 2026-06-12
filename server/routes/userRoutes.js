import e from "express";
import { addUser, getUserById } from "../controller/registerUser.js";

const router = e.Router();
router.route("/").post(addUser);

router.route("/:id").get(getUserById);

export default router;

/*
we import router so that server/index.js can import it and mount it onto the main app. 
app (server/index.js)
 └── uses "/api/users"
      └── router (userRoutes.js)
           ├── POST "/"        → addUser
           └── GET  "/:id"     → getUserById

           */
