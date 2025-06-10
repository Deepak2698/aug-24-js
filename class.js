//classes in javascript

//non-parameterized constructor


// class domain{

//     //data members

//     name = 'Vedant'; //string
//     age = 21; //number
//     tech = ['SQL','UI/UX','JAVA','JAVASCRIPT','NODE','REACT'];



//     //method functions

//     printName(){
//         console.log(this.name);
//     }

//     addSubject(subject){
//         this.tech.push(subject);
//         this.printName();
//     }

//     displayTech(){
//         console.log(`Technologies Learnt ${this.tech}`);
//     }
// }

// let obj = new domain();

// console.log('Name of the student is : ' + obj.name +" "+ 'and his gae is' +" " + obj.age);
// // obj.printName();
// obj.addSubject('C#');
// // console.log(`Technologies Learnt ${obj.tech}`);
// obj.displayTech();


//parameterized constructor

 class domain{

    //data members

    name; //string
    age; //number
    tech = ['SQL','UI/UX','JAVA','JAVASCRIPT','NODE','REACT'];



    //method functions

    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    printName(){
        console.log(this.name);
    }

    addSubject(subject){
        this.tech.push(subject);
        this.printName();
    }

    displayTech(){
        console.log(`Technologies Learnt ${this.tech}`);
    }
}

let obj = new domain();
let obj1 = new domain('OM',21);

console.log('Name of the student is : ' + obj1.name +" "+ 'and his age is' +" " + obj1.age);
// // obj.printName();
// obj.addSubject('C#');
// // console.log(`Technologies Learnt ${obj.tech}`);
// obj.displayTech();