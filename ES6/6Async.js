'use strict';

addElement("first")
addElement("second")
addElement("third")
addElement("fourth")

// addElement("first promise")
// .then(function(){ return addElement("second promise")})
// .then(function(){ return addElement("third promise")})
// .then(function(){ return addElement("fourth promise")})

// addElement("first promise sexy syntax")
// .then(x => addElement("second promise syntax"))
// .then(x => addElement("third promise syntax"))
// .then(x => addElement("fourth promise syntax"))

// async function myFunction(){
//    await addElement("first async");
//    await addElement("second async");
//    await addElement("third async"); 
//    await addElement("forth async");  
// };
// myFunction();

// function addElement(elementText){
//     return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         var element=document.createElement('H1');
//         element.innerText = `${elementText} ${Date.now()}`;
//         document.body.appendChild(element);
//         resolve();
//     }, Math.random() * 2000);
// })}

function addElement(elementText){
     setTimeout(function(){
        var element=document.createElement('H1');
        element.innerText = `${elementText} ${Date.now()}`;
        document.body.appendChild(element);
    }, Math.random() * 2000);
}