// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }
// Что выведет консоль и почему?
// Выведет 10 десять раз
//  settimeout был использован 10раз потому что он внутри цикла
// timeout используется, т.е. 10 раз внутри цикла будет запущен таймер, 
// пока первый из таймеров закончится цикл уже пройдет все 10 итераций и  i будет иметь значение 10.
// zadacha 2    
// var date = new Date();
// function day(){
// if(date.getDay()==0){
//     return("Sunday")
// }else if(date.getDay()==1){
// return("Monday")
// }else if(date.getDay()==2){
//     return("Tuesday")
// }else if(date.getDay()==3){
//     return("Wednesday")
// }
// else if(date.getDay()==4){
//     return("Thursday")
// }
// else if(date.getDay()==5){
//     return("Friday")
// }
// else{
//     return("Saturday")
// }   }
// console.log("Today is : "+ day())
// console.log( "Current time is "+date.getHours()+" : " + date.getMinutes()+" : "+ date.getSeconds() );
// let num = +prompt();
// console.log(Number(num.toString().split('').reverse().join('')))
// let n = +prompt()
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   console.log( factorial(n) );
// let num1=+prompt();
// let num2=+prompt();
// if(num1<=num2){
//     console.log(num2)
// }else{
//     console.log(num1)
// }
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(','));
// console.log(myColor.join('+'));
// var month_name = function(data){
//     month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return month[data.getMonth()];
//     };
//     console.log(month_name(new Date("10/12/2021")));
//     console.log(month_name(new Date("1/13/2014")));
// let s = prompt();
// if(s.charAt(0)==s.charAt(0).toUpperCase()){
//     console.log("UPPERCASE")
// }else{
//     console.log("LOWERCASE")
//      }   
//4
// 1)
// let s1 = document.querySelector('#string-1');
// let s2=document.querySelector('#string-2')
// let s3=document.querySelector('#string-3')
// let s4=document.querySelector('#string-4')
// let s5=document.querySelector('#string-5')
// let s6=document.querySelector('#string-6')
// console.log(s3.innerHTML+'\n'+s1.innerHTML+'\n'+s5.innerHTML+'\n'+s2.innerHTML+'\n'+s6.innerHTML+'\n'+s4.innerHTML+'\n'+s3.innerHTML);
// 2)
// let red= document.body.children[0];
// let red1= document.body.children[1];
// let red2= document.body.children[2];
// let green = document.body.children[3]
// let green1 = document.body.children[4]
// let green2 = document.body.children[5]
// green.style.color='green';
// green1.style.color='green';
// green2.style.color='green';
// red.style.color='red';
// red1.style.color='red';
// red2.style.color='red';
// 3)
// var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
// var task=tasks.forEach(function(item, i, tasks) {
//     ol = document.getElementById('todo-list')
//     let li = document.createElement('li');
//     li.className='tasks';
//         ol.append(li);
//         li.append(item)
//   });
// 4)
// let p = document.querySelectorAll('p').forEach(function(hr){
//     hr.insertAdjacentHTML('afterend', '<hr/>')
// });
// 5)
// let cart = document.querySelector('#cart-items');
// let rem=cart.children[1].remove(cart);
// let r2 = document.createElement('div');
// r2.textContent='Canned Fish';
// r2.className= 'item';
// let span = document.createElement('span');
// span.className= 'qty';
// span.textContent = '4';
// let end=r2.append(span);
// console.log(r2)
// let r =  cart.replaceChild(r2,cart.children[3])
// 6) 
// let ul=document.createElement('ul');
// document.body.append(ul);
// let li;
// let inp;
// function todo(){
//     do{
//     inp = prompt('INT STH');
//      li=document.createElement('li');
//     li.textContent=inp;
//     ul.append(li);
//         }while(inp !== null  && inp !== ''){
//          li.textContent='EMPTY'
//         }
// }
// todo();
"use strict";