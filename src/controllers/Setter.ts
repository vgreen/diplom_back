import {getConnection} from "typeorm";
import {users} from "../data/users";
import {stat} from "../data/stat"
import {Patient, Statistic, User} from "../entity";
import {patients} from "../data/patients";

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

export const setUsers = () => {
    users.forEach((item)=>{
        setNewBasicField(User,item)
    })
};

export const setPatients = () => {
    patients.forEach((item)=>{
        setNewBasicField(Patient,item)
    })
};

export const setStat = () => {
    stat.forEach(async(item)=>{
        try{
            // await getConnection()
            //     .createQueryBuilder()
            //     .insert()
            //     .into(Statistic)
            //     .values({
            //         shBekaPost:item.SHkala_Beka_pri_postuplenii,
            //         shBekaVip:item.SB_na_moment_vipiski,
            //
            //     })
            //     .execute();
        }
        catch(error){
            console.log(error.message);
        }
    })
};

