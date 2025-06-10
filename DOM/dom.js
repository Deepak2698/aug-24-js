

let num = 100; //Outer or Global Scope

function printMyMessage(value){
    console.log(value);
}

const externalMessage = () => {
    alert('Welcome from Outside');
    console.log('Hello Learners');

    var num1 = 10;
    console.log(num1); //functional scope

    let num2 = 20;
    console.log(num2); //block scope

    const num3 = 30;
    console.log(num3); //block scope


    {
        var num4 = 40;
        console.log(num4); //functional scope
        
        let num5 = 50;
        console.log(num5); //block scope

        const num6 = 60;
        console.log(num6); //block scope
    }

    console.log(num4); //functional scope
    // console.log(num5);  //Error //block scope
    // console.log(num6); //Error //block scope

    console.log(num3);
    console.log(num2);
    console.log(num1);
    console.log(num);  //lexical or Inner scoping

    let name = 'Smith';
    var num8 = 1000;

    printMyMessage(name);
    printMyMessage(num8);

}

// console.log(num4); // functional 
// console.log(num);  //global scope


function changeCompany(){

    let element = document.getElementById('myID');

    // element.innerHTML = 'Welcome to Cognizant';

    alert('Welcome to the company');

    console.log('Congratulations');

    document.write('Hello')
}

function enterUser(){

    let username = window.prompt('Enter username');

    let element = document.getElementById('username');

    element.innerHTML = username;
}

function deleteUser(){

    let confirm = window.confirm('Are you sure you want to delete ?');

    let element = document.getElementById('username');

    if(confirm){
        element.innerHTML = 'User Deleted'
    }else{
        element.innerHTML = 'User not deleted'
    }
}