import { Response, Request } from "express";
import { VideogameServices } from "../services/videogame.services";
import { json } from "stream/consumers";

export class VideogamesController{
    constructor(
        public readonly videogameServices : VideogameServices
    ){}

    crateVidegames =(req :Request, res:Response)=>{
        const {name, price, description} = req.body;
        this.videogameServices.createVidegame({name, price, description})
            .then(videogame =>{
                return res.status(201).json(videogame)
            })
            .catch((err:any)=>{
                return res.status(500).json(err)
            })

        // return res.status(201).json({name,price, description})
    }

    getVideogames = (_:Request, res:Response) =>{
        this.videogameServices.finAllVideogame()
        .then(videogame=>{
            return  res.status(200).json(videogame)
        })
        .catch((erro:any)=>{
            console.log(erro)
        })
    }

    getVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params

        if(isNaN(+id)){
            return res.status(400).json({message : "El id no es un numero"})
        }

        this.videogameServices.finAllVideogameById(+id)
            .then(videogame=>{  
                return res.status(200).json(videogame)
            })
            .catch((err:any)=>{
                console.log(err)
                return res.status(500).json(err)
            })
        // return res.status(200).json({
        //     messages : `videojuesgo con el ${id}`
        // })
    }

    updateVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params
        const {name, price, description} = req.body;

        if(isNaN(+id)){
            return res.status(400).json({message:"debe ser un numero"})
        }

        this.videogameServices.updateVideogame({name, price, description}, +id)
            .then(videogame =>{
                return res.status(200).json(videogame)
            })
            .catch((err:any)=>{
                console.log(err)
                return res.status(500).json(err)
            })

        // return res.status(200).json({
        //     messages : `videojuesgo con el ${id} actulizo`
        // })
    }

    deleteVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params
        return res.status(204).json()
    }
}