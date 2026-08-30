// Date and time
// you can create data object using the new keyword . it can be done in several ways.
// there are 9 ways t create a date object
// const currDate=new Date();
// console.log(currDate);

// Interview Questions
addDaystoDate=(date,extraDay)=>{
    let updatedate=date.setDate(date.getDate()+extraDay);
    updatedate=new Date(updatedate);
    return updatedate;
}
const date=new Date("2024-02-29");
const newdate=addDaystoDate(date,7);
console.log(newdate.toLocaleDateString());


// WAF to calculate the diffrence in days between two given dates

getDateDiffrence=(date1,date2)=>{
    let oneDay=24*60*60*1000;
    let diff=Math.abs(date2-date1);
   const totaldays=Math.round(diff / oneDay);
    
    return totaldays;
    // console.log(date2-date1);

}
const date1=new Date("2024-02-19");
const date2=new Date("2024-03-01");

console.log(getDateDiffrence(date1,date2));
