
// Public, private, protected, readonly 
// ===============================


// class
class Person2{
    // public _name:string    - // meros olganda hohlagancha ishlatish mumkin
    // private _name:string   - // meros olinsa ham faqat shu classda ishlatish kk itemda ishlatib bo'lmaydi 
    // protected _name:string - // meros olganda ham ishlatsa bo'ladi ammo objectlarda ishlatib bo'lmaydi
    // public readonly _name:string   - // readonly - const ga o'xshash u variableni bir berilgandan keyin o'zgartirib bo'lmaydi
    
    _name:string
    _age:number

    constructor(name:string, age:number){
        this._name = name
        this._age = age
    }

    // constructorda public qo'yilsa (this._name = _name,  ... ) o'zi tenglab qo'yadi  
    // constructor(public _name:string, public _age:number){
    // }

    sayHello():string{
        return `Assalomu aleykum mening ismin ${this._name}`
    }
}

class Student3 extends Person2 {
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

const Asom: Person2 = new Person2('Islom', 23)
console.log(Asom)

const Sardor: Student3 = new Student3('Sardor', 21, 'kis-107', 2)
console.log(Sardor)



