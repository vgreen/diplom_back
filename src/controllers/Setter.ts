import {getConnection} from "typeorm";

export const setNewField = async( Entity:Function , userParams:any) => {
    try{
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Entity)
        .values({...userParams})
        .execute();
    }
    catch(error){
        console.log(error.message);
    }
}
