export const generateDiagnoseQuery = (dateS, dateE, dep?):string => {
    return (`SELECT st.Kod as 'Code',
       count(if(din.department = '1', 1, null)) as 'dep1' ,
       count(if(din.department = '2', 1, null)) as 'dep2',
       count(if(din.department = '3', 1, null)) as 'dep3',
       count(if(din.department = '4', 1, null)) as 'dep4',
       count(if(din.department = '5', 1, null)) as 'dep5',
       count(if(din.department = '6', 1, null)) as 'dep6',
       count(if(din.department = '7', 1, null)) as 'dep7',
       count(if(din.department = '8', 1, null)) as 'dep8',
       count(if(din.department = '9', 1, null)) as 'dep9',
       count(if(din.department = '10', 1, null)) as 'dep10',
       count(if(din.department = '%1 дн%', 1, null)) as 'dnst1',
       count(if(din.department = '%2 дн%', 1, null)) as 'dnst2department'
   from mgerm.department_income as din
   inner join mgerm.stat_cards_table as st on st.hystoryNumber = din.hystoryNumber
   where st.Diagnoz = 'F' and din.date >= "${dateS}" and din.date <= "${dateE}" 
   ${dep ?  ' and din.department="' + dep + '"': '' } 
   group by Code;`)
};
