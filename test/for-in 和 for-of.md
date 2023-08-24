## for-in 循环

for-in 循环是一种迭代对象属性的方法。它可以用于遍历对象中的所有可枚举属性，包括从原型链继承的属性。通常，我们使用 for-in 循环来遍历对象的键名。

  const person = {
    name: "张三",
    age: 18,
    sex: "男"
  }
  for (let key in person) {
    console.log(key, person[key])
  }
  // name 张三
  // age 18
  // sex 男

for-in 循环并不是按照对象属性在对象中的顺序迭代的。这是因为 JavaScript 中的对象属性没有固定的顺序。因此，我们在使用 for-in 循环迭代对象时，不能保证它们的顺序。另外，由于 for-in 循环会遍历对象的原型链，因此可能会迭代到不是自身属性的属性。为了避免这种情况，我们可以使用 hasOwnProperty 方法来检查属性是否为对象自身的属性。

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sex = "男";
  const person = new Person("张三", 18);
  for (let key in person) {
    console.log(key, person[key]);
  }
  // name 张三
  // age 18
  // sex 男  因为person对象的原型链上有一个sex属性，所以在遍历对象属性时，会将sex属性也遍历出来

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sex = "男";
  const person = new Person("张三", 18);
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(key, person[key])
    }
  }
  // name 张三
  // age 18

hasOwnProperty(propertyName)方法 是用来检测属性是否为对象的自有属性，如果是，返回true，否者false; 参数propertyName指要检测的属性名；
用法：object.hasOwnProperty(propertyName) // true/false
hasOwnProperty() 方法是 Object 的原型方法（也称实例方法），它定义在 Object.prototype 对象之上，所有 Object 的实例对象都会继承 hasOwnProperty() 方法。
hasOwnProperty() 只会检查对象的自有属性，对象原形上的属性其不会检测；但是对于原型对象本身来说，这些原型上的属性又是原型对象的自有属性，
所以原形对象也可以使用hasOwnProperty()检测自己的自有属性

  const obj = {
      name:'abc',
      age:18,
      eat:{
          eatname:'a',
          water:{
              watername:'b'
          }
      }
  }
  console.log(obj.hasOwnProperty('name')) //true
  console.log(obj.hasOwnProperty('age'))  //true
  console.log(obj.hasOwnProperty('eat'))  //true

  console.log(obj.hasOwnProperty('eatname'))  //false
  console.log(obj.hasOwnProperty('water'))  //false
  console.log(obj.hasOwnProperty('watername'))  //false

  console.log(obj.eat.hasOwnProperty('eatname'))  //true
  console.log(obj.eat.hasOwnProperty('water'))  //true

  console.log(obj.eat.hasOwnProperty('watername'))  //false
  console.log(obj.eat.water.hasOwnProperty('watername'))  //true

## for-of 循环

for-of 循环是一种迭代可迭代对象的方法。它可以用于遍历数组、字符串、Map、Set、TypedArray 等可迭代对象。通常，我们使用 for-of 循环来遍历数组或字符串的值

  const arr = [1, 2, 3];
  for (const value of arr) {
    console.log(value)
  }
  // 1
  // 2
  // 3

  // 迭代String
  let iterable = "boo";
  for (let value of iterable) {
    console.log(value);
  }
  // "b"
  // "o"
  // "o"

  // 迭代 TypedArray
  let iterable = new Uint8Array([0x00, 0xff]);
  for (let value of iterable) {
    console.log(value);
  }
  // 0
  // 255

  // 迭代Map
  let iterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  for (let entry of iterable) {
    console.log(entry);
  }
  // ["a", 1]
  // ["b", 2]
  // ["c", 3]
  for (let [key, value] of iterable) {
    console.log(value);
  }
  // 1
  // 2
  // 3

  // 迭代 Set
  let iterable = new Set([1, 1, 2, 2, 3, 3]);
  for (let value of iterable) {
    console.log(value);
  }
  // 1
  // 2
  // 3
  
for-of 循环不适用于迭代对象属性。如果我们尝试使用 for-of 循环迭代对象，将会抛出 TypeError 异常
 
  const person = {
    name: 'John',
    age: 30,
    gender: 'male'
  }
  
  for (const value of person) {
    console.log(value) // Uncaught TypeError: person is not iterable
  }

## for-in 和 for-of 的区别

1. 迭代对象的内容不同: for-in 循环迭代对象的是键名，而 for-of 循环迭代对象的是值。因此，for-in 循环适用于迭代对象的键名，而 for-of 循环适用于迭代对象的值
<!-- for-in -->
const arr = [1, 2, 3];
for (const value in arr) {
  console.log(value);
}
// 0
// 1
// 2
<!-- for-of -->
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value)
}
// 1
// 2
// 3

2. 迭代对象的类型不同: for-in 循环适用于遍历对象，包括普通对象、数组、函数等，而 for-of 循环适用于遍历可迭代对象，包括数组、字符串、Map、Set、TypedArray 等

3. 迭代对象的顺序不同: for-in 循环的迭代顺序是不确定的，因为对象的属性没有固定的顺序。而 for-of 循环的迭代顺序是确定的，因为可迭代对象的值是按照一定顺序排列的

4. 迭代对象的原理不同: for-in 循环遍历对象时，会遍历对象的原型链，并且会包含从原型链继承的属性。而 for-of 循环遍历的对象是可迭代对象，它们的值是可枚举的。
