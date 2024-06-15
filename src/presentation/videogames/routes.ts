import { Router } from "express";
import { VideogamesController } from "./controller";


export class VideogamesRoutes{
    static get routes():Router{
        const router =  Router();
        const controlleer = new VideogamesController()

        router.get('/',controlleer.getVideogames)
        router.post('/', controlleer.crateVidegames)
        router.get('/:id', controlleer.getVideogamesById)
        router.patch('/:id', controlleer.updateVideogamesById)
        router.delete('/:id', controlleer.deleteVideogamesById)

        
        return router
    }
}