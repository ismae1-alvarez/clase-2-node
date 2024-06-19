import { Response, Request } from "express";
import { VideogameServices } from "../services/videogame.services";

export class VideogamesController{
    constructor(
        public readonly videogameServices : VideogameServices
    ){}

    crateVidegames =(req :Request, res:Response)=>{
        const {name, price, description} = req.body;
        this.videogameServices.createVidegame('hola')
        return res.status(201).json({name,price, description})
    }

    getVideogames = (req:Request, res:Response) =>{
        return res.status(200).json({messages: "Se pide bien"})
    }

    getVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params
        return res.status(200).json({
            messages : `videojuesgo con el ${id}`
        })
    }

    updateVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params
        const {name, price, description} = req.body;
        return res.status(200).json({
            messages : `videojuesgo con el ${id} actulizo`
        })
    }

    deleteVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params
        return res.status(204).json()
    }
}