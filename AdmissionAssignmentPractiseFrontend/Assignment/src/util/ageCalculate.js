export const ageCalculate = (dob)=>{
     if (!dob) return "";

    const birthDob=new Date(dob);
    const today=new Date();
    let age=today.getFullYear()-birthDob.getFullYear();
    let monthDiff=today.getMonth()-birthDob.getMonth();
    if(monthDiff<0 || (monthDiff==0 && today.getDate() < birthDob.getDate())){
        age--;
    }
    console.log(age);
    
    return age; 
}