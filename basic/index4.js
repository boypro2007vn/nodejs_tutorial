var arr = [10,3,2,4,6];

//console.log(arr[0]);

// for(var i = 0; i < arr.length; i++){
//   console.log(`Phan tu thu ${i + 1} la: ${arr[i]}`);
// }

// arr.forEach(
//   function(){
//     console.log(`Phan tu`);
//   }
// );
// arr.push('100');
// arr.unshift('100');
//arr.pop();
//arr.shift();
arr.splice(1, 2);
console.log(arr.join(' '));
