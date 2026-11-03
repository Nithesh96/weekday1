let score=[90,80,50,70,60]
let names=["as","adda","dress"]
score.push(10);//push method will add element into array as a last element
console.log(score)
score.unshift(50)//unshif method will add the element in  as a first element
console.log(score)
score.pop()//it is using to remove the last element of the array
console.log(score)
score.shift()//it is used to remove the first element of the array
console.log(score)
score.splice(2,2)// it remove element based starting index value and the count
console.log(score)
score.push(10,100,200)
console.log(score)
let slicedArray= score.slice(2,4)//it used slice the array and  create copy of sliced array based start index vlaue(2), (4 index)up to where is stop
console.log(slicedArray)
score.sort((a,b)=>a-b); // this method used to arrange the numeric array into ascending order
console.log(score)
score.sort((a,b)=>a-b);
names.sort()
console.log(names)





