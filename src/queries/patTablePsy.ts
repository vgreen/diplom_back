export const generateTablePsy = (dateStart:string = '01-01-2018', dateEnd: string = '01-01-2019', department?: string) =>
    `select distinct * from
    (SELECT in_.hystoryNumber as 'istoria_bolezn' ,pl.last_name, pl.first_name, pl.second_name, in_.date as 'postupil', out_.out_date as 'vibil', t.* FROM vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as t
left join ( select * from mgerm.epm_records union all select * from mgerm_archive.epm_records ) t2 on t2.formalisedDataID = t.rid and t2.incorrect != 1 and t2.deleted != 1 and t2.digest is not null and t2.recordTypeID = 680
inner join mgerm.department_income as in_ on in_.hystoryNumber = t2.hystoryNumber
inner join mgerm.department_outcome as out_ on in_.hystoryNumber = out_.hystoryNumber
inner join mgerm.patients_list as pl on out_.patientID = pl.patientID
where in_.date > '${dateStart}' and in_.date < '${dateEnd}'
${department ?  ' and in_.department="' + department + '"': '' } 
order by postupil) as sel
limit 20000
`;