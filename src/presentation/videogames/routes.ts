import { Router } from "express";
import { VideogamesController } from "./controller";


export class VideogamesRoutes{
    static get routes():Router{
        const router =  Router();
        const controlleer = new VideogamesController()

        router.get('/',controlleer.getVideogames)
        router.post('/', controlleer.crateVidegames)
        
        return router
    }
}