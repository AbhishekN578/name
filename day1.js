// let num = "123";
// console.log(Boolean(num));
// console.log(typeof num);
// console.log("5"==="5");
// console.log("4"===4);
// console.log("2" !== "2");
// let num=12;
// if (12>30) {
//     console.log('true');
// }
// else{
//     console.log('heloo');
// }
// nums=13;
//  num=(nums<3) ? "ad" : "ss";
// console.log(num);
// let marks=35;
// if(marks>90){
// console.log('Grade A');
// }
// else if(marks>80){
//     console.log('Grade B');
// }
// else if(marks>70){
//     console.log('Grade C');
// }
// else if(marks>60){
//     console.log('Grade D ');
// }
// else{
//     console.log("Grade E");
// }
// let num1=12;
// let num2=23;
// let num3=44;
// if(num1>num2){
// console.log('largest number');
// }
// else if(num1>num3){
//     console.log('larger');

// }
// else if(num2>num1){
// console.log('largest');
// }
// else if(num2>num3){
// console.log('large');
// }
// else if(num3>num1){
//     console.log('la');
// }
// else if(num3>num2){
// console.log('larg');
// }
// else{
//     console.log('nothing');
// }

 
       
// let num=0;
// do{
//     console.log(num);
//     num++
// }
// while(num==3);

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));

// let num=1;
// for (let i=1;i<=Math.num){

// }

// for(let i=1;i<=50;i++){
//         if(i%4==0){
//             continue;
//         }
//         console.log(i);
//        




// for (let i=1;i<=100;i++){
//   if(i%5==0&&i%11==0){
//     console.log(i);
//     break;
//   }
// }


// function showmessage(){
//     let message="hello";
//     console.log(message);
// }
// showmessage();
// console.log(message);


// let num=12;
// function show(){
//     console.log(num);
// }
// show();
// function show(name){
// console.log(`heloo ${name}`)
// }
// show("virat");

// function show(a,b){
//    return a+b;
// }
// console.log( show(5,2));
// let num=1234;
// let sum=0;

// while (num%10){
//  let digit=
// }
// console.log('5' > 3);
//     console.log('02' == 2);
// let x=62;
//     if(x<10){
//         console.log("child");
//     }
//     else if(x>10&&x<18){
//         console.log("teen");
//     }
//     else if(x>18&&x<60){
//         console.log("adult");
//     }
//     else{
//         console.log("senior");
//     }

// console.log(false || 'Hello');
// console.log(0 || 42);
// console.log(null || undefined);

// console.log(!true); 
// console.log(!'text'); // 
// console.log(!null);

// for(let i=0;i<=5;i++){
//    let row="";
//     for(let j=0;j<=5;j++){
//    row+=j+"";
       
//     }
//     console.log(row);
// }
// let star="*";
// for(let i=0;i<=5;i++){
//    let row="";
//    for(let j=0;j<=4;j++){
//     row+=star+"";
//    console.log(row);
//    }
// }

// let n=10;
//  let sum=0;
// for(let i=1;i<=n;i++){
   
//     sum=sum+i;
//     console.log(sum);
// }


// let num=123;
// let sum=0;
// while(num>0){
//     let rem=num%10;
//     sum=parseInt(sum+rem);
//    num=num/10;

// }
// console.log(sum);


// let n=100;
//  let sum=0;
// for(let i=1;i<=n;i++){
//    if(n%3==1){
//     sum=sum+i;
  
//    }
//      console.log(sum);
// }

// let num = 12345; 
//        let sum = 0;
       
//        while (num > 0) {
//          sum += num % 10;
//          num = Math.floor(num / 10);
//        }
       
//        console.log("The sum of digits is: " + sum);

// let person = {name:"jeeva" , age:23};
// console.log("name"in person);


// let person={
//   name:"jeeva",
//   age:23,

// getproperty: function(){
//   return this.name +" and your age is "+ this.age;
// }
// }
// console.log(person.getproperty());
 
// let car={name:"jeeva",age:23};
// for(let key in car){
//   console.log(`${key} : ${car[key]}`);
// }
// console.log(JSON.stringify(car));

// 1.	Create an object student with properties name, age, and course. 
// Print the name property using dot notation.




// let student={
//     name:"varun",
//     age:23,
//     course:"python full stack development"
// };

// console.log(student.name+" " + student.age + " " +student.course);


// let person = { name: "Alice", age: 25 };
// console.log("address"  in person )

//  let student={
//      name:"varun",
//      age:23,
//      course:"python full stack development",
//      getproperty:function(){
//         return student.name+" "+ student.age+" "+student.course;
//      }
// }
// console.log(student.getproperty());

// 4.	Using a loop, iterate over the following object and print each key-value pair:


//  car = { 
//     brand: "Toyota",
//      model: "Camry", 
//      year: 2022 ,
//  car1:{
//    brand1:"bmw",
//    model1:"com"
// }
// };

// console.log(car.car1.brand1);

// function person(name,age,study){
//     this.name=name,
//     this.age=age,
//     this.study=study
// };
// myfather=new person("dad",45,"sslc");
// mymother=new person("mom",40,"puc");
// mysister=new person("aish",25,"degree");
// console.log(myfather.course);


// 6.Create an object book with properties: title, author, and pages. 
// Access and print the value of the author using bracket notation.


// Obj={
//     title:"love",
//     author:"shakespere",
//     pages:"25",

// }
// console.log(Obj["author"]);
//7.	Add a new property grade to the student object from question 1 after it has been created.
//  Print the updated object.

// let student={
//      name:"varun",
//      age:23,
//      course:"python full stack development",
     
//  };
//  student.grade="B";
//  console.log(student);

//8.	Remove the age property from the person object from question 2.
 //Print the object after deletion.

// let person = { name: "Alice", age: 25 };
// delete person.age;
// console.log(person);
// 9.	Write a function hasKey(obj, key) that returns true if the key exists in the object, 
// otherwise returns false.

// function hasKey(obj, key) {
//   return key in obj;
// }

// let student = {
//   name: "Rahul",
//   age: 18
// };

// console.log(hasKey(student, "name"));  
// console.log(hasKey(student, "grade")); 


//10.	Given the object let user = { id: 101, username: "john_doe", email: "john@example.com" };,
//  update the email property to a new email address and print the updated object.

// let user = {
//      id: 101, 
//      username: "john_doe", 
//      email: "john@example.com"
//      };
 
// user.email="new john@gmail.com";
// console.log(user);


// let num=[1,2,3,4,5,6,7];
// let sum=0;

// for(let i=0;i<num.length;i++){
//     sum+=num[i]  ;
//     console.log(sum);
// }


// let arr=[73,12,25,6,60];
// let min=arr[0];
// let max=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i];
//     }

// }
// console.log(min);
// let arr=[9,21,34,54,76];
// let avrg=0;
// for(let i=1;i<arr.length;i++){
//     avrg+=arr[i];
   
// }
// console.log(avrg/2);


// let arr=[9,21,34,54,76];

// console.log(arr.includes(54));

// let arr=[1,2,3,4];
// let product=1;
// for(let i=1;i<arr.length;i++){
//     product*=arr[i];
    
// }
// console.log(product);

// class user{
//     name;
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log(`${this.name}`);
//     }
// }
// let obj=new user("john");
// let obj1=new user("abhi");
// obj.greet();
// obj1.greet();

// class number{
//     num1;
//     name;
//     constructor(name){
//         this.name=name;
//         // this.num1=num1;
//     }
//     greet(num1){
//     this.num1=num1;
//         for(let i=0;i<=num1;i++){
         
//          console.log(i);
//         }
//         }
//         MessageChannel(){
//             // this.name=name;
//             console.log('hello ' +this.name);
//         }

// }

// let obj=new number("abhishek");
// obj.MessageChannel();
// obj.greet(10);

// class user{
//     name;
//     #password;
//     constructor(name,password){
//         this.name=name;
//         this.#password=password;

//     }
//     checkpassword(input){
//         console.log(this.#password);
//      return input===this.#password;
     
//     }
   
// }
// let obj=new user("abhi","1234");
// console.log(obj.checkpassword("1234"));
// console.log(this.#password);

// class Animal{
//     name;

//     constructor(name){
//         this.name = name;
//     }
//     sound(){
//         console.log(`it makes noise ${this.name}`);
//     }
//  }
//    class Dog extends Animal{
//     breed;

//     constructor(name,breed)
//     {
//         super(name);
//         this.breed = breed;
//     }
//     breedtype(){
//         console.log(`it has the ${this.breed}`);
//     }
//    }
//    let mydog = new Dog('rubby','german shafferd');
//    mydog.sound();
//    mydog.breedtype();


// class user{
//     name;
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//       console.log(`My name ${this.name}`);
//     }
// }
// class Trends extends user{
//     age;
//     constructor(name,age){
//         super(name)
//         this.age=age;
//     }
//     greet(){
//         console.log(`my name is ${this.name} and i have ${this.age} year old`);
//     }
// }
// let obj=new Trends("john",27);
// obj.greet();



// class edu{
//     key;
//     constructor(key){
//         this.key=key;
//     }
//     greet1(){
//         console.log(`may be ${this.key}`)
//     }
// }


// class Edu{
//     name;
//     age;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
       

//     }
// }
// class Near extends Edu{
//     education;
//     constructor(name,age,education){
//         super(name,age);
//         this.education=education;
//     }
//     greet1(){
//         console.log(`my name is ${this.name} and i have ${this.age} and i have completed ${this.education}`);
//     }

// }
//   let obj=new Edu("jeeva",27,"be");
//   obj.greet();
   

//  x=5;
// console.log(x);
// var x;

// var x=2;
// console.log(x=1);

// let x=5;
// let x=7;
// console.log(x);


// const age=24;
// console.log(age);
// let a=111111111111111;
// console.log(BigInt(a));












