import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { router } from "./router";
import cookieParser from "cookie-parser";
import path from "path";
import express, { Express } from "express";

class Main {
  start() {
    const corsOption = {
      credentials: true,
      origin: [process.env.CLIENT_URL, process.env.CLIENT_URL2],
    };

    const app: Express = express();
    const port = process.env.PORT || 3000;

    app.use(express.static(path.resolve(__dirname, "..", "www")));
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors(corsOption));
    app.use("/api", router.getRouter());
    app.use("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "..", "www/index.html"));
    });
    //app.use(errorMiddleware);

    app.listen(port, () => {
      console.log(`[server]: Server is running at ${process.env.CLIENT_URL2}`);
    });
  }
}

const m = new Main();
m.start();
