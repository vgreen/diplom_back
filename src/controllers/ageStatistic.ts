import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";


export const ageStatisticRouter = Router();

ageStatisticRouter.use("/", ageStatisticRequest);

async function ageStatisticRequest(request: Request, response: Response) {
    let ageStatistic: any;
    try {
        ageStatistic = await getAgeStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        console.log(ageStatistic);
        response.send(ageStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getAgeStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dep: string = (department) ? ("and di.department  = '" + department + "'\n ") : '',
        dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query("SELECT department,\n" +
                "\t\t\n" +
                "\t\tCOUNT(IF(age<=17,1,null)) as 'under18',\n" +
                "\t\tCOUNT(IF(age between 18 and 19,1,null)) as '19',\n" +
                "\n" +
                "\t\tCOUNT(IF(age between 20 and 24,1,null)) as '20-24',\n" +
                "\t\tCOUNT(IF(age between 25 and 29,1,null)) as '25-29',\n" +
                "\t\tCOUNT(IF(age between 30 and 34,1,null)) as '30-34',\n" +
                "\t\tCOUNT(IF(age between 35 and 39,1,null)) as '35-39',\n" +
                "\t\tCOUNT(IF(age between 40 and 44,1,null)) as '40-44',\n" +
                "\t\tCOUNT(IF(age between 45 and 49,1,null)) as '45-49',\n" +
                "\t\tCOUNT(IF(age between 50 and 54,1,null)) as '50-54',\n" +
                "\t\tCOUNT(IF(age between 55 and 59,1,null)) as '55-59',\n" +
                "\t\t\n" +
                "\t\tCOUNT(IF(age between 60 and 69,1,null)) as '60+',\n" +
                "\t\tCOUNT(IF(age>=70,1,null)) as '70+'\n" +
                "\n" +
                "\t\tFROM\n" +
                "\t\t(\n" +
                "\t\tSELECT \n" +
                "\t\t\tt1.hystoryNumber,\n" +
                "\t\t\tt1.age,\n" +
                "\t\t\tIF(t1.department='Дн. ст.','Дн. ст.',concat(t1.department)) as department\n" +
                "\t\tFROM mgerm.department_income as t1\n" +
                "\t\tWHERE t1.date >= '"+ dateStart +"' and t1.date <'"+dateEnd+"'\n" +
                dep +
                "\t\t) as tabl1\n" +
                "\t\tGROUP BY department\n" +
                "\t\tORDER BY CAST(department  AS SIGNED)\n");

    } catch (error) {
        console.log(error.message);
    }

};