import { Router } from "express";

class MainRouter {
  getRouter(): any {
    const router = Router();
    //router.get('/exchanges', exchangesController.getExchanges);
    return router;
  }
}

const router = new MainRouter();

export { router };
