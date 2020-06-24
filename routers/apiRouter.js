import express from "express";
import routes from "../routes";
import { postRegisterView,
postAddComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.poset(routes.addComment, postAddcomment);

export default apiRouter;
