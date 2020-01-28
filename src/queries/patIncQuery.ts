export const generatePatIncQuery = (historyNum?: number, dateS?:string, dateE?:string) => {
   return `SELECT * FROM mgerm.department_income 
    ${(historyNum || dateS || dateE )? ' where ' : '' }
    ${historyNum && ' hystoryNumber = ' + historyNum}
    ${dateS && ' date >= ' + dateS}
    ${dateE && ' date <= ' + dateE}
    `
}