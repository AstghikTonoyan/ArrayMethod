"use strict";
/*
Տնային 44

1. պրակտիկա եք անում նշված թեմաներով

forEach (ստեղծում եք 2 հատ)
filter (ստեղծում եք 5 հատ)
map (ստեղծում եք 5 հատ)
reduce (ստեղծում եք 8 հատ)
some + every (ստեղծում եք 2 հատ)
fill (ստեղծում եք 1 հատ)
find (ստեղծում եք 1 հատ)

*/

// FOR EACH (value, index, array)-----------------------------------------------------
const arrName = ["Joe", "Jack","Angel", "Any"];
arrName.forEach((value, index) => {
	console.log(`${index+1} => (${value})`);
	
});

arrName.forEach(( value,index, array) => console.log(index, array));


// FILTER (value, index, array)---------------------------------------------------------------
const arr = [14, 5, 6, 15,69, 89, 3, 5, 9, false,8, 24, 15, 5,"s", true, "e"];
const filteredArr1 = arr.filter(value => value > 48);
const filteredArr2 = arr.filter(value => value === 5);
const filteredArr3 = arr.filter(value => typeof(value) === "boolean");
const filteredArr4 = arr.filter(value => value % 2 === 0);
const filteredArr5 = arr.filter(value => typeof(value)=== "string");

console.log(filteredArr1);
console.log(filteredArr2);
console.log(filteredArr3);
console.log(filteredArr4);
console.log(filteredArr5);




const arrForFilter = [24, "sda", true, null,10, 80, undefined, "sada", 157];
const filteredArrForFilter = arrForFilter.filter(item => {
	return (
		item % 2 ===0 && typeof(item) === "number"
	);
});
console.log(filteredArrForFilter);




// MAP (value, index, array)--------------------------------------------------------------------
const data = [2800, 3400, 4200, 4900, 5100, 5999];
const newData = data.map(value => value);

data.pop(5999);

console.log(data);
console.log(newData);


const data1 = [2800, 3400, 4200, 4900, 5100, 5999];
const newData1 = data1.map(value => value % 2 !== 0);

console.log(data1);
console.log(newData1);


const person = [
	{name: "John", age: 34},
	{name: "Alex", age: 31},
	{name: "Tom", age: 18},
	{name: "Alice", age: 13},
	{name: "Melica", age: 17}
];

const children = person.map(obj => obj).filter(obj => obj.age < 18);
const  noChildren = person.map(obj => obj).filter(obj => obj.age >= 18);
console.log(children);
console.log(noChildren);



// REDUCE-----------------------------------------------------------------------------
const prices = [800, 2800, 3400, 4200, 5800];
const sale = [250, 1290, 2410, 2999, 3556];

const all = [...prices, ...sale];

const result = all.reduce((total, current, index, arr) => {
	return total + current;
}, 0);

const result1 = all.reduce((total, current, index, arr) => {
	return total * current;
}, 1);

console.log(result); // 17000
console.log(result1); // 1.5377622627087383e+33




const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const newReduce = letters.reduce((result, current, index) => {
	// եթե ցանկանում ենք ուղարկել որպես Object
	//return {...result, [current]: index};

	// եթե ցանկանում ենք ուղարկել որպես Array
	 return [...result, index];
}, []);

console.log(newReduce);




// SOME & EVERY || true / false
const forTest = [54, 26, 78, "95", 21, 15, 224, "15"];

// SOME === ||
const some = forTest.some(item => typeof(item) === "string");
console.log(some); // true

// EVERY === &&
const every = forTest.every(item => typeof(item) === "number");
console.log(every); // false

// CONCAT
const xArr = [2, 4, 6];
const yArr = [3, 5, 7];

const x = [].concat(xArr, yArr); // concat
const y = [...xArr, ...yArr]; // rest

console.log([].concat(xArr, yArr));
console.log(xArr.concat(yArr));
console.log(x);
console.log(y);

// FIND
const findArr = [7, 50, 42, 36, 65, 33];
const found = findArr.find(item => item > 30);
const foundIndex = findArr.findIndex(item => item === 36);
const foundLast = findArr.findLast(item => item > 35);

 console.log(found);
 console.log(foundIndex);
 console.log(foundLast);

// FILL

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
const c = [1, 2, 3, 4];

a.fill(8, 2, 3); // [ 1, 2, 8, 4 ]
b.fill(5, 1); // [ 1, 5, 5, 5 ]
c.fill(3) ;// [ 3, 3, 3, 3 ]
 
// console.log(a);
console.log(b);
// console.log(c);



//2. ձեռքով ստեղծում եք հետևյալ մեթոդները  forEach map filter reduce-----------------------------------------
//1.forEach----------------------------------------------
function myForEach (arr, fun) {
    let i = 0;
    while(i < arr.length){
        fun(arr[i]);
        i++;    
    }
 }
 function val (value){
    console.log(value);
 }
 myForEach([15,85,2,4,7,8,9], val);


 //2.map--------------------------------------------------------
const student = [
    {
        name : "Ani",
        lastName : "Hakobyan"

    },
    {
        name : "Hayk",
        lastName : "Hovhannisyan"

    }
];
const lastName = [];
student.forEach(function (value, index) {
    lastName[index]= value.lastName;
});
console.log(lastName);

 //3.filter------------------------------------------------------
 const block = [5, 85, 10, 30, 90, 6, 9];

 const myfilter =  function (arr, fun){
    const filterarr1 = [];
    let i = 0;
    arr.forEach(function (val){
        if(fun(val)) {
            filterarr1[i] = val; 
            i++;
        }
    });
    return  filterarr1;

 };
 const copyblock = myfilter(block, function(val){
    return val % 2 === 0;
 });
 console.log(copyblock);


 //4reduce--------------------------------------------------------
//gumar
const sum = function (arr){
    let sum0 = 0;
    arr.forEach(function (val){
        sum0 += val;
    });
    return sum0;
    
};
console.log(sum([10, 20, 30, 40]));


//artadryal

const multi = function (arr){
    let multi0 = 1;
    arr.forEach(function (val){
        multi0 *= val;
    });
    return multi0;
    
};
console.log(multi([10, 40]));