for(i=0;i<10;i++){
    if(i==5){
        break; //stop by this value
    }
    console.log(i)
}

console.log('----------------------------------');

for(i=0;i<10;i++){
    if(i==5){
        continue; //ignore this value
    }
    console.log(i)
}