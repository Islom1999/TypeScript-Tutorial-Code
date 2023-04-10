//interface 

// ====================================================
interface IPerson{
    _name:string
    _age:number          // _age?:number
    sayHello():string    // sayHello: () => string
}

// =====================================================
// type bitta nomli bir nechta type hosil qilib bo'lmaydi
type IPerson1  = {
    _name:string
    _age:number          // _age?:number
    sayHello():string    // sayHello: () => string
}

// typelarni birlashtirsa bo'ladi
type IPersonType1  = {
    _name:string
}
type IPersonType2  = {
    _age:number          // _age?:number
}

type IPersonType  = IPersonType1 & IPersonType2 & {
    sayHello():string    // sayHello: () => string
}

// ========================================================
// bir nechta bir xil interface hosil qilish mumkin => bir birini to'ldirib yig'ib boriladi

interface IPerson{
    _name:string
    sayHello():string    // sayHello: () => string
}

interface IPerson{
    _age:number          // _age?:number
    sayHello():string    // sayHello: () => string
}

// interfaace inheritance - meros olish
interface IPersonOld{
    _age:number          
    sayHello():string  
}
interface IPersonNew extends IPersonOld{
    _name:string          
    sayHello():string  
}
// hohlagancha interfafelardan meros olish mumkin
interface IPersonNew extends IPersonOld, IPerson, IPerson1{
    _name:string          
    sayHello():string  
}


// ==========================================================
class Person implements IPerson {
    _name:string
    _age:number

    constructor(name:string, age:number){
        this._name = name
        this._age = age
    }

    sayHello():string{
        return `Assalomu aleykum mening ismin ${this._name}`
    }
}

//  ikki hil ko'rinish
class Student extends Person{
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
}

class Student1 extends Person implements IPerson1{
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
}

const islom: Person = new Person('Islom', 24)
console.log(islom)
console.log(islom.sayHello())

const asom: Student = new Student('Asom', 21, 'kis-107', 2)
console.log(asom)
console.log(asom.sayHello());



