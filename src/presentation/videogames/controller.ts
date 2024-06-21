import { Response, Request } from "express";
import { VideogameServices } from "../services/videogame.services";
import { CustomError } from "../../domain";


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
                if(err instanceof CustomError){
                    return res.status(err.status).json({message : err.message})
                }

                return res.status(500).json({message : "Something went very wrong!"})
            })
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
    }

    deleteVideogamesById = (req:Request, res:Response) =>{
        const {id} =  req.params

        if(isNaN(+id)){
            return res.status(400).json({message : "El id debe de ser un numeror"})
        }

        this.videogameServices.deleteVideogame(+id) 
            .then(()=>{
                return res.status(204).json()
            })
            .catch((err:any)=>{
                return res.status(500).json(err)
            })
     
    }
}