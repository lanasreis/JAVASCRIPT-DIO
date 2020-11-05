let arr = [3,5,7];
arr.foo = 'hello';

for(let i in arr){
    console.log(i);
}
console.log('\n\nOF:')
for(let i of arr){
    console.log(i);
}