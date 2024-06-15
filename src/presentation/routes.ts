import { Request, Response, Router } from "express";
import { VideogamesRoutes } from "./videogames/routes";

export class AppRoutes {
    static get routes():Router{

        const router =  Router();

        router.use("/api/v1/videogames",VideogamesRoutes.routes)

        router.get("/users", (req:Request, res:Response)=>{
            res.send("users")
        })

        router.get("/purchases", (req:Request, res:Response)=>{
            res.send("purchases")
        })

        return router
    }
}
