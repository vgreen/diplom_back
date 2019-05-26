import {getConnection} from "typeorm";

export const setNewBasicField = async( Entity:Function , Params:any) => {
    try{
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Entity)
        .values({...Params})
        .execute();
    }
    catch(error){
        console.log(error.message);
    }
}

export const setNewRelatedField = async( Entity:Function , Params:any) => {
    try{
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Entity)
        .values({...Params})
        .execute();
    }
    catch(error){
        console.log(error.message);
    }
};
