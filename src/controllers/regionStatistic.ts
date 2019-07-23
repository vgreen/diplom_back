import { getConnection } from "typeorm";
import { Request, Response, Router } from "express";
import { makeStatistic } from "../utils/makeStatistic";


export const regionStatisticRouter = Router();

regionStatisticRouter.use("/", regionStatisticRequest);

async function regionStatisticRequest(request: Request, response: Response) {
    let regStatistic: any;
    try {
        regStatistic = await getRegStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        makeStatistic(regStatistic, 'region_code');
        response.send(regStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getRegStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dep: string = (department) ? ("and dep_income.department  = '" + department + "'\n ") : '',
        dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query("SELECT dep_income.region_code , count(dep_income.patientID) FROM mgerm.department_income as dep_income\n" +
                "left join mgerm.patients_list as patients on patients.patientID = dep_income.patientID\n" +
                "where dep_income.date >= '" + dateS + "' and dep_income.date < '" + dateE + "'" + dep +
                "group by region_code")
            ;

    } catch (error) {
        console.log(error.message);
    }

};