export const makeStatistic = (data:any[], paramFirst:string, paramSecond?:string) => {
    let uniqKeyFirst:string[] = [],
        uniqKeySecond:string[] = [],
        result:any[] = [];

    uniqKeyFirst = data.map((item) => {
        if(uniqKeyFirst.indexOf(item[paramFirst]) == -1 && item[paramFirst] !== null) {
            return item[paramFirst]
        }
    });
    uniqKeySecond = data.map((item) => {
        if(uniqKeySecond.indexOf(item[paramSecond]) == -1 && item[paramSecond] !== null) {
            return item[paramSecond]
        }
    });
    uniqKeyFirst.forEach((item)=>{
        uniqKeySecond.forEach((elem)=>{

        })
    });
    console.log(uniqKeyFirst)
};

function countField(data:any[], field_first:string, field_second:string, value_first:number | string, value_second:number | string){
    let counter:number = 0;
    data.forEach((item)=>{
        if(item[field_first] == value_first && item[field_second] == value_second) counter+=1;
    })
}