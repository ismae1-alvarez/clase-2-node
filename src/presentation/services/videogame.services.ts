import { Videogame } from "../../data"

enum Status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
  }


export class VideogameServices{
    constructor (){}
    async createVidegame(videogamData:any){
        // console.log(videogamData)
        
        try {
            const videogame =  new Videogame();
            videogame.title =  videogamData.name.toLowerCase().trim();
            videogame.description= videogamData.description.toLowerCase().trim();
            videogame.price = videogamData.price;

            await videogame.save()

            return videogame;

        } catch (error:any) {
            console.log(error); // Manejar errores
        }


    }

    async finAllVideogame(){
        try {
            const videogame =  await  Videogame.find({
                where :{
                    status: Status.ACTIVE
                }
            })
            if(!videogame){
                throw new Error("El videojeugo no existe ")
            }

        } catch (error) {
            throw new Error("Error")
            console.log(error)
        }

        
    }

    async finAllVideogameById(id:number){
        try {
            return await  Videogame.findOne({
                where : {
                    id: id, 
                    status : Status.ACTIVE
                }
            })
        } catch (error:any) {
            throw new Error("fdssfs")
            console.log(error)
        }
    }

    async updateVideogame(videogamData:any, id:number){
        const videogame = await this.finAllVideogameById(id);

        videogame!.title =  videogamData.name.toLowerCase().trim();
        videogame!.description= videogamData.description.toLowerCase().trim();
        videogame!.price = videogamData.price;

        try {
            await videogame?.save()
            return videogame
        } catch (error) {
            console.log(error)
        }
    }
}