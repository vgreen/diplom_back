import {getRepository} from "typeorm";
import {User, SpecDiagnose, MainDiagnose, Statistic, Visit, Income, Patient} from "../entity";


export const connectMainDiagnose = async() => {
    const res =  await getRepository(MainDiagnose)
        .createQueryBuilder("diagnose")
        .select("diagnose")
        .leftJoinAndSelect("diagnose.author", "author")
        .getOne();
    return res;
}

export const connectIncome = async() => {
    const res = await getRepository(Income)
        .createQueryBuilder("income")
        .select("income")
        .leftJoinAndSelect("income.patient", "patient")
        .leftJoinAndSelect("income.mainDiag", "diag")
        .leftJoinAndSelect("income.statistic", "statistic")
        .leftJoinAndSelect("income.author", "doctor")
        .leftJoinAndSelect("income.visits", "visits")
        .getMany()    
    return res;
}

export const connectPatients = async() => {
    const res = await getRepository(Patient)
        .createQueryBuilder("patient")
        .select("patient")
        .leftJoinAndSelect("patient.incomes" , "incomes")
        .leftJoinAndSelect("patient.currentIncome", "currincome")
        .getMany()    
    return res;
}
    