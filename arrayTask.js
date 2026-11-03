let score =[10,20,10,20,30,40,50]
let score1=[10,20,30,40]
let duplicatecount=0;
let duplicate=0
for(let i=0;i<score.length;i++){
    {
for(let j = i+1;j<score.length;j++){
    if(score[i]===score[j]){
         duplicatecount++;
         console.log(score[i]);
    } 
}
    }
}
console.log("duplicate count", duplicatecount);

//***no duplicate***
for(let k=0;k<score1.length;k++){
    {
for(let l = k+1;l<score1.length;l++){
    if(score[k]===score[l]){
         duplicate++;
         //console.log(score[k]);
    } 
    }
}
    }
    if(duplicate>0){

        console.log("no duplciate")
    }


