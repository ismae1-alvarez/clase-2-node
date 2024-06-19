import { Router } from "express";
import { VideogamesController } from "./controller";
import { VideogameServices } from "../services/videogame.services";


export class VideogamesRoutes{
    static get routes():Router{
        const router =  Router();

        const videoggameServices =  new VideogameServices

        const controlleer = new VideogamesController(videoggameServices)

        router.get('/',controlleer.getVideogames)
        router.post('/', controlleer.crateVidegames)
        router.get('/:id', controlleer.getVideogamesById)
        router.patch('/:id', controlleer.updateVideogamesById)
        router.delete('/:id', controlleer.deleteVideogamesById)

        
        return router
    }
}