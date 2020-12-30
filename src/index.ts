/*
interface Person {
    name: string;
    age: number;
    gender: string;
}
const cuckoo: Person = {
    name: "cuckoo",
    age: 100,
    gender: "male"
};
*/

class Person {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const name: string = "cuckoo";
const age: number = 100;
const gender: string = "male";
const cuckoo: Person = new Person(name, age, gender);

const sayHello = (person: Person): string => {
    return `Hello ${person.name}! you are ${person.age}, you are a ${person.gender}.`;
}

const consoleLog = (logMessage: string): void => {
    console.log(logMessage);
}

const logMessage: string = sayHello(cuckoo);
consoleLog(logMessage);

// if it's not, error occur.
export {};