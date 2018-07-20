/****************************
 * 
 * Md Al Amin (mdalamin.mis@gmail.com)
 * Functional Javascript
 * First Class Function
 * 
 *****************************/

function funMyName(name) {
    return 'Hi, ' + name;
}

// 1) A Function can be stored in a Variable

var myname = funMyName;

var anothermyname = myname;

console.log(anothermyname('Md Al Amin'));

var fun = funMyName('Abu Said Sarker');

console.log(myname);

console.log(fun);

console.log(myname('Mubashir Amin'));

// 2) A Function can be stored in an Array

var arr = [1, 2, 3, anothermyname];
arr.push(myname)
console.log(arr);


// 3) A Function can be stored as an Object Field or Property
var objPerson = {
    name: 'Zannatul Ferdous',
    anothermyname: myname,
    print: function () {
        console.log('Hi');
    }
}

console.log(objPerson);

objPerson


// 4) We can create function as needed

var sum = 30 + (function (valu) {
    return valu
})(70);
sum;

// 5) We can pass function as an arguments

function funargument(name, fun) {
    return fun(name);
}

var result = funargument('Md Al Amin', myname);
console.log(result);


// 6) We can return function from another function

function base(x) {
    return function (y) {
        var result = 1;

        for (var i = 0; i < x; i++) {
            result *= y;
        }

        return result;
    }
}

var power = base(4);
var result = power(3);

var result = base(4)(3);
result;


