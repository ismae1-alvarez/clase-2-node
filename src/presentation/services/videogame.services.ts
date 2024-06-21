import { Videogame } from "../../data"
import { CustomError } from "../../domain";

enum Status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
  }


export class VideogameServices{

    constructor (){}


    async createVidegame(videogamData:any){

        const videogame =  new Videogame();
        videogame.title =  videogamData.name.toLowerCase().trim();
        videogame.description= videogamData.description.toLowerCase().trim();
        videogame.price = videogamData.price;
        
        try {
            return await videogame.save()
        } catch (error:any) {
             throw CustomError.internalServerError("Something went very wrong!") // Manejar errores
        }


    }

    async finAllVideogame(){
        try {
            return await  Videogame.find({
                where :{
                    status: Status.ACTIVE
                }
            })
        } catch (error) {
            throw CustomError.internalServerError("Something went very wrong!")
        }

        
    }

    async finAllVideogameById(id:number){

        const videogame =  await  Videogame.findOne({
            where : {
                id: id, 
                status : Status.ACTIVE
            }
        })
        
        if(!Videogame){
            throw CustomError.notFound(`Video game with id : ${id} not found`)
        }
        return videogame
    }

    async updateVideogame(videogamData:any, id:number){
        const videogame = await this.finAllVideogameById(id);

        videogame!.title =  videogamData.name.toLowerCase().trim();
        videogame!.description= videogamData.description.toLowerCase().trim();
        videogame!.price = videogamData.price;

        try {
            return await videogame?.save()
            // return videogame
        } catch (error) {
            throw CustomError.internalServerError("Something went very wrong!")
        }
    }

    

    async deleteVideogame(id:number){
        const videogame =  await this.finAllVideogameById(id);

        videogame!.status = Status.INACTIVE

        try {
            await videogame?.save();
            return;

        } catch (error:any) {
            throw CustomError.internalServerError("Something went very wrong!")
        }
    }
}