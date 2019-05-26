import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";


export const ageStatisticRouter = Router();

ageStatisticRouter.use("/", ageStatisticRequest);

async function ageStatisticRequest(request: Request, response: Response) {
    let params: string[],
        ageStatistic: any;
    try {
        params = await request.body;
        console.log(params);

            ageStatistic = await getAgeStatistic('', '', '');

            response.send(ageStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getAgeStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dep: string = (department) ? ("and department  = " + department) : '';
    try {
        return await getConnection("mgerm_connect")
            .query("SELECT di.department, count(CASE\n" +
                "    WHEN di.age < 18 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as 'under18' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 18 and di.age < 22 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '18-21' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 22 and di.age < 25 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '22-24' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 25 and di.age < 30 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '25-29' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 30 and di.age < 35 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '30-34' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 35 and di.age < 40 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '35-39' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 40 and di.age < 45 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '40-44' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 45 and di.age < 50 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '45-49' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 50 and di.age < 55 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '50-54' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 55 and di.age < 60 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '55-59' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 60 and di.age < 65 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '60-64' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 65 and di.age < 70 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '65-69' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >= 70 and di.age < 75 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '70-74' ,\n" +
                "count(CASE\n" +
                "    WHEN di.age >75 THEN 1\n" +
                "    ELSE NULL\n" +
                "END) as '75+' \n" +
                "FROM mgerm.department_income as di\n" +
                "where di.date >= '2015-01-01' and di.date < '2016-01-01' " + dep +
                "group by department\n");

    } catch (error) {
        console.log(error.message);
    }

};