export const generateTablePsy = (dateStart:string = '01-01-2018', dateEnd: string = '01-01-2019', department?: string) =>
    `
SELECT distinct pl.last_name, pl.first_name, pl.second_name, in_.hystoryNumber as 'istoria_bolezn' , date_format(in_.date,' %d-%m-%Y') as 'postupil', date_format(out_.out_date,' %d-%m-%Y') as 'vibil', t.* FROM vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as t
left join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) t2 on t2.formalisedDataID = t.rid
left join mgerm.department_income as in_ on in_.hystoryNumber = t2.hystoryNumber
left join mgerm.department_outcome as out_ on out_.hystoryNumber = in_.hystoryNumber
left join mgerm.patients_list as pl on in_.patientID = pl.patientID
 where in_.date > '${dateStart}' and in_.date < '${dateEnd}'
${department ?  ' and in_.department="' + department + '"': '' } 
order by postupil
limit 10000;
`;