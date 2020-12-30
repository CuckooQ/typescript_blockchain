const name: string = "cuckoo";
const age: number = 100;
const gender: string = "male";

const sayHello = (name: string, age: number, gender?: string): string => {
    return `Hello ${name}! you are ${age}, you are a ${gender}.`;
}

const consoleLog = (logMessage: string): void => {
    console.log(logMessage);
}

const logMessage1: string = sayHello(name, age, gender);
const logMessage2: string = sayHello(name, age);

consoleLog(logMessage1);
consoleLog(logMessage2);

// if it's not, error occur.
export {};