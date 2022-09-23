const a = new Date();
console.log(a);

console.log('date get method');

console.log(a.getFullYear());
console.log(a.getDate());
console.log(a.getTime());
console.log(a.getMonth());
console.log(a.getSeconds());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getMilliseconds());
console.log(a.getDay());

console.log('date set method');

a.setDate(25);
console.log(a);
a.setFullYear(2022);
console.log(a);
a.setMonth(9);
console.log(a);
a.setHours(14);
console.log(a);
a.setMinutes(45);
console.log(a);
a.setSeconds(33);
console.log(a);
a.setMilliseconds(500);
console.log(a);
a.setTime(1634356367);
console.log(a);