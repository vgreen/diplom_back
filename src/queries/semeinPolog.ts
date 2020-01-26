export const generateSemPologQuery = (dateStart:string = '01-01-2018', dateEnd: string = '01-01-2019', department?: string) =>
    `SELECT din.department, count(d.rid) as 'VSE', 
\tcount(if(d.Semeynoe_pologenie = '1', 1, null)) as 'holost', 
    count(if(d.Semeynoe_pologenie = '2', 1, null)) as 'gr_brak',
    count(if(d.Semeynoe_pologenie = '3', 1, null)) as 'v_brake',
    count(if(d.Semeynoe_pologenie = '4', 1, null)) as 'razved',
    count(if(d.Semeynoe_pologenie = '5', 1, null)) as 'vdov',
    count(if(d.Semeynoe_pologenie not in ('1', '2', '3', '4', '5'), 1, null)) as 'error'
FROM mgerm.department_income as din
inner join mgerm.epm_records as ep on ep.hystoryNumber = din.hystoryNumber and ep.incorrect != 1 and ep.deleted != 1 and ep.digest is not null
left join vmh_db.dopolnitelnie_statisticheskie_dannie as d on d.rid = ep.formalisedDataID
where din.date > "${dateStart}" and din.date < "${dateEnd}" 
${department ?  ' and din.department="' + department + '"': '' } 
group by department`;

//where din.department not in (12, 13, 14, 16, 11)