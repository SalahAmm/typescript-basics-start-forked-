{

let user : {

    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

user = {
    name : "salah",
    age: 23,
    isAdmin: true,
    id: 22,


};

let classMates : string[];

classMates = ["ammoru " , "mahmoud" , "yeslovak"];



function add(a: number , b: string , claCu: (a: number , b:string ) => number): void {

    claCu(a , b);
    const result = a + b;

    }

type Myname = string | boolean;

let classer : Myname;

classer = "salh";
classer = false;

interface ObjectsLevel {
    password: string;
    email: string;
}


let creds : ObjectsLevel;

creds = {
    password : "ammour",
    email: "@gmail",
    
} 

class Auth implements ObjectsLevel {
    email: string;
    password : string;
    userName: string;
};

function login(cred : ObjectsLevel){

};

login(new Auth);




let  check : admin;

check = {
    userAdmin : "salah",
    userPerson: "person",
}
// or you can use this :
interface Admin {
    userAdmin: string;
};

interface userINTER {
    userPerson : string;
};

interface admin extends Admin , userINTER {}

type Role = "string1" | "string2" | "string3";


let role : Role;

function performAction(action : string | number , role:Role) {
    if (role === "string1" && typeof action === "number") {
        
    }
}

type DataStuct<T> = {
    storage: Array<T>;
    add: (data: T) => void;
};


let  textStorage : DataStuct<number> ;
    textStorage = {
        storage : [];
        add: (data) {
            this.storage.push(data);  
        }
    }

    function mergge<T , U>(a: T , b: U) {
        return a ;
    }


    let a = 3;
    let b = 5;
    
    const newUser = mergge<number , number>(a = 2, b = 3);

    

 
 

}  
