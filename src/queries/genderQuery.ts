export const generateGenderQuery = (dateS, dateE, dep?):string => {
   return (`SELECT din.sx as 'Gender', 
count(if(din.department = '1', 1, null)) as 'dep1' ,
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
from mgerm.department_income as din 
where din.date >= '${dateS}' and din.date < '${dateE}'
group by sx;`)
};