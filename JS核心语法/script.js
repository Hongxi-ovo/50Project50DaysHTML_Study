// 变量
// 全局变量
var num = 1;
console.log(num);
// 局部变量
let num1 = 2;

var String1 = "Hello World!";
console.log(String1);

var arrNum = [1, 2, 3, 4, 5];

console.log(arrNum);
console.log(arrNum.length);
console.log(arrNum[0]);
console.log(arrNum[arrNum.length - 1]);

// 在末尾添加元素
arrNum.push(6);
// 在开头添加元素
arrNum.unshift(0);
console.log(arrNum);

// 删除末尾元素
arrNum.pop();
// 删除开头元素
arrNum.shift();
console.log(arrNum);

// 删除指定位置的元素 2 从第3个开始删除 1 删除一个元素
arrNum.splice(2, 1);
console.log(arrNum);

// 指定位置添加元素 从第三个开始 删除0个 添加一个9
arrNum.splice(2, 0, 9);
console.log(arrNum);

// 反转数组
arrNum.reverse();
console.log(arrNum);
// 遍历数组
arrNum.forEach(function (item, index) {
  console.log(item, index);
});

// 可以在 https://developer.mozilla.org/ 网站找到更多的方法
// from()
console.log(Array.from("hello"));
console.log(Array.from([1, 2, 3], (x) => x + x));

let obj = { name: "why", age: 18 };

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(obj.name);
console.log(obj["name"]);

console.log("name" in obj);
console.log("age" in obj);

console.log(Object.getOwnPropertyNames(obj));
