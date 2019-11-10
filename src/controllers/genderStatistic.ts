import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";


export const genderStatisticRouter = Router();

genderStatisticRouter.use("/", genderStatisticRequest);

async function genderStatisticRequest(request: Request, response: Response) {
    let genderStatistic: any;
    try {
        genderStatistic = await getGenderStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        response.send(genderStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getGenderStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dep: string = (department) ? ("and di.department  = '" + department + "'\n ") : '',
        dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query(
                "select (CASE " +
                "when t.sx = 0 then 'Мужской'"+
                "else 'Женский' "+
                "end) "+
                 "as 'пол' ,"+
             "count(CASE "+
                 "when t.department = '1' then 1 "+
                 'else 0 '+
                 "end) as '1 отделение',"+
             "count(CASE "+
                 "when t.department = '2' then 1 "+
                 "else 0 "+
                 "end) as '2 отделение',"+
             "count(CASE "+
                 "when t.department = '3' then 1 "+
                 'else 0 '+
                 "end) as '3 отделение',"+
             "count(CASE "+
                 "when t.department = '4' then 1 "+
                 "else 0 "+
                 "end) as '4 отделение',"+
             "count(CASE "+
                 "when t.department = '5' then 1 "+
                 'else 0 '+
                 "end) as '5 отделение',"+
             "count(CASE "+
                 "when t.department = '6' then 1 "+
                 "else 0 "+
                 "end) as '6 отделение',"+
             "count(CASE "+
                 "when t.department = '7' then 1 "+
                 'else 0 '+
                 "end) as '7 отделение',"+
             "count(CASE "+
                 "when t.department = '8' then 1 "+
                 "else 0 "+
                 "end) as '8 отделение',"+
             "count(CASE "+
                    "when t.department = '9' then 1 "+
                    'else 0 '+
                    "end) as '9 отделение',"+
             "count(CASE "+
                    "when t.department = '10' then 1 "+
                    "else 0 "+
                    "end) as '10 отделение' "+
                "from mgerm.department_income as t "+
                "where t.date >= '"+ dateS +"' and t.date < '" + dateE + "' " +
                "group by t.sx\n");

    } catch (error) {
        console.log(error.message);
    }

};