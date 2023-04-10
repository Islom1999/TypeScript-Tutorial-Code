
// Abstract class 
// ===============================

//interface 
interface IPerson{
    _name:string
    _age:number          // _age?:number
    sayHello():string    // sayHello: () => string
    info(): string
}

interface ISudent extends IPerson{
    _group: string
    _course: number
}

// class
//  Abstarct classlar faqat vorislik olish uchun ishlatiladi ulardan object hosil qilinmaydi
abstract class Person1 implements IPerson {
    _name:string
    _age:number

    constructor(name:string, age:number){
        this._name = name
        this._age = age
    }

    sayHello():string{
        return `Assalomu aleykum mening ismin ${this._name}`
    }
    // Abstract method 
    abstract info(): string
}

class Student2 extends Person1 implements ISudent{
    _group:string = ''
    _course:number = 0
    
    constructor(name:string, age:number, group: string, course: number){
        super(name, age)
        this._group = group
        this._course = course
    }
    sayHello():string{
        const parentMethod = super.sayHello()
        return `${parentMethod}. Men ${this._course} kursning ${this._group} guruhda o'qiyman`
    }
    // Abstract classlardan meros olganda Parentda abstract mehtod bo'lsa itemda ham qo'llash majburiy 
    info():string {
        return `
            Ism: ${this._name}
            Yoshi: ${this._age}
            Kurs: ${this._course}
            group: ${this._group}
        `
    }
}

// const islom1: IPerson = new Person1('islom1', 24)
// console.log(islom1)

const asom1: ISudent = new Student2('asom1', 21, 'kis-107', 2)
console.log(asom1)
console.log(asom1.info())



