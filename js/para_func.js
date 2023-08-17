function cal(val1,val2,op){
    // console.log(` Value of A is ${a} and Value of B is ${b} `)
    if(op=='+'){
        console.log(`${val1} + ${val2} = ${val1+val2}`);
    }
    else if(op=='-'){
        console.log(`${val1} - ${val2} = ${val1-val2}`);
    }
    else if(op=='*'){
        console.log(`${val1} * ${val2} = ${val1*val2}`);
    }
    else if(op=='/'){
        console.log(`${val1} / ${val2} = ${val1/val2}`);
    }
    else{
        console.log("Invalid operator");
    }
};

cal(90,0,"+");