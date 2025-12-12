// function outer(){
//     let count = 10;
//     return function inner(){
//         return count;
//     }
// }

// const result=outer();
// console.log(result());



//  async function fetchdata(){
//     try{
//         const responce=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await responce.json();
//         console.log(data);
        
//     }
//     catch(error)
//     {
//         console.log(error);
        
//     }

// }

// var data=fetchdata();



// async function fetchdata(){
//     try{
//         const response=fetch('https://jsonplaceholder.typicode.com/users')

//         const data=(await response).json();
//         console.log(data);
//         let container=document.getElementById('container');
//         //container.innerHTML='';

//         const para=document.createElement('p');
        
//         para.textContent='suresh peravlai';
       
//         container.appendChild(para);

//         const userdiv=document.getElementById('div');

//         data.forEach(user => {
            
//             const nametag=document.getElementById('name');
//             const emailtag=document.getElementById('email');

//             nametag.textContent=user.name;

//             emailtag.textContent=user.email;

//            userdiv.appendChild(nametag);
//            userdiv.appendChild(emailtag);


//            container.appendChild(userdiv);


//         });

//     }
//     catch(error){console.log();
//     }
    

// }

//fetchdata();


// function greet(fn){
//     fn();
//     fn();
    
// }

// greet(()=>console.log('hello'));

function fact(n)
{
    if(n==0 || n==1)
        return 1;

    return n*fact(n-1);

}

console.log(fact(5));

var array=[1,2,3,4,5];
console.log(array.find(a=>a>3));

console.log('5'==5);
console.log('5'===5);
