export const generateTablePsy = (dateStart:string = '01-01-2020', dateEnd: string = '01-01-2021', department?: string) =>
    `
SELECT distinct pl.last_name, pl.first_name, pl.second_name, in_.hystoryNumber as 'istoria_bolezn' , diag.cur_ds as 'current_diagnose', in_.department, if(in_.sx, "муж", "жен" ) as "pol", in_.age as "vozrast", date_format(in_.date,' %d-%m-%Y') as 'postupil', date_format(out_.out_date,' %d-%m-%Y') as 'vibil', t.* FROM vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as t
left join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (680) and deleted = 0 and digest is NOT NULL and incorrect=0) t2 on t2.formalisedDataID = t.rid
left join mgerm.department_income as in_ on in_.hystoryNumber = t2.hystoryNumber
left join mgerm.department_outcome as out_ on out_.hystoryNumber = in_.hystoryNumber
left join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (8) and deleted = 0 and digest is NOT NULL and incorrect=0
\t\tunion all
\tselect formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (8) and deleted = 0 and digest is NOT NULL and incorrect=0) t3 on t3.hystoryNumber = in_.hystoryNumber
left join vmh_db.8_diagnoses as diag on diag.rid = t3.formalisedDataID
left join mgerm.patients_list as pl on in_.patientID = pl.patientID
 where in_.date > '${dateStart}' and in_.date < '${dateEnd}'
${department ?  ' and in_.department="' + department + '"': '' } 
order by postupil
limit 20000;
`;

// export const generateTablePsy = (dateStart:string = '01-01-2018', dateEnd: string = '01-01-2019', department?: string) =>
//   `
// SELECT distinct pl.last_name, pl.first_name, pl.second_name, stt.hystoryNumber as 'istoria_bolezn' , date_format(stt.in_date,' %d %M %Y') as 'postupil', date_format(stt.out_date,' %d %M %Y')  as 'vibil', stt.ageIN, stt.Diagnoz, stt.Kod, stt.Kod2,  t.* FROM vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as t
// left join ( 
//     select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
// 	  union all
// 	  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) t2 on t2.formalisedDataID = t.rid
// left join mgerm.stat_cards_table as stt on stt.hystoryNumber = t2.hystoryNumber
// left join mgerm.patients_list as pl on stt.patientID = pl.patientID
// where stt.in_date > "${dateStart}" and stt.in_date < "${dateEnd}"
// limit 10000;
// `;
