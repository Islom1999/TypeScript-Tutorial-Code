// inheritance class - meros olish
class Person1 {
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

class Student extends Person1{
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

class Teacher extends Person1{
    _disciplines:string[]
    
    constructor(name:string, age:number, disciplines:string[]){
        super(name, age)
        this._disciplines = disciplines
    }

    sayHello():string{
        const parentMethod = super.sayHello()
        return `${parentMethod}. Men ${this._disciplines[0]} fandan dars beraman `
    }
}


const islom1: Person1 = new Person1('Islom', 24)
console.log(islom1)

const asom1: Student = new Student('Asom', 21, 'kis-107', 2)

console.log(asom1)

// let a2:unknown = 1
// let b2: number = <number>a2

const Sardor:Person1 = <Person1>asom1

console.log(Sardor)

const abror:Teacher = new Teacher('Abror', 34, ['matimatika', 'geometriya'])

console.log(abror)

console.log(islom1.sayHello());
console.log(asom1.sayHello());
console.log(abror.sayHello());


