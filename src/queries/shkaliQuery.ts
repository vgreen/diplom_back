export const generateShBekaInQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.SHkala_Beka_pri_postuplenii as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.SHkala_Beka_pri_postuplenii < 226 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value
`;

export const generateShBekaOutQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.SB_na_moment_vipiski as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.SB_na_moment_vipiski < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value
`;

export const generateShGamiltonaInQuery = (dateStart:string = '01-01-2018', dateEnd: string = '01-01-2019', department?: string) =>
    `SELECT o.SHkala_Gamiltona_pri_postuplenii as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.SHkala_Gamiltona_pri_postuplenii < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value
`;

export const generateShGamiltonaOutQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.SHG_na_moment_vipiski as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.SHG_na_moment_vipiski < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value`;

export const generateShLTInQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.Lichnostnaya_trevoga_pri_postuplenii as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2department'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.Lichnostnaya_trevoga_pri_postuplenii < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value`;

export const generateShLTOutQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.LT_na_moment_vipiski as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.LT_na_moment_vipiski < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value`;

export const generateShSTInQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.Situatsionnaya_trevoga_pri_postuplenii as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber 
inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.Situatsionnaya_trevoga_pri_postuplenii < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value`;

export const generateShSTOutQuery = (dateStart:string = '2014-01-01', dateEnd: string = '2019-01-01', department?: string) =>
    `SELECT o.ST_Na_moment_vipiski as 'Value',
\tcount(if(din.department = '1', 1, null)) as 'dep1', 
\tcount(if(din.department = '2', 1, null)) as 'dep2', 
\tcount(if(din.department = '3', 1, null)) as 'dep3', 
\tcount(if(din.department = '4', 1, null)) as 'dep4', 
\tcount(if(din.department = '5', 1, null)) as 'dep5', 
\tcount(if(din.department = '6', 1, null)) as 'dep6', 
\tcount(if(din.department = '7', 1, null)) as 'dep7', 
\tcount(if(din.department = '8', 1, null)) as 'dep8', 
\tcount(if(din.department = '9', 1, null)) as 'dep9',
\tcount(if(din.department = '10', 1, null)) as 'dep10', 
\tcount(if(din.department = '%1 дн%', 1, null)) as 'dnst1', 
\tcount(if(din.department = '%2 дн%', 1, null)) as 'dnst2'
FROM mgerm.department_income as din
inner join ( 
    select formalisedDataID,  patientID, hystoryNumber from mgerm.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0
\t  union all
\t  select formalisedDataID,  patientID, hystoryNumber from mgerm_archive.epm_records where recordTypeID in (690, 680) and deleted = 0 and digest is NOT NULL and incorrect=0) ep on ep.hystoryNumber = din.hystoryNumber inner join vmh_db.otsenka_psihologicheskogo_sostoyaniya_bolnogo as o on o.rid = ep.formalisedDataID
where o.ST_Na_moment_vipiski < 200 and din.date > '${dateStart}' and din.date < '${dateEnd}'
${department ?  ' and din.department="' + department + '"': '' } 
group by Value
order by Value`;