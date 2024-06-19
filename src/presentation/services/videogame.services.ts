import { Videogame } from "../../data"


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
            return await  Videogame.find()
        } catch (error) {
            console.log(error)
        }
    }
}