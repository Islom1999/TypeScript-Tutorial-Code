
// Classes

class Person {
    _name:string = 'Inson'
    _age:number = 23

    // construktor - classda bir martta foydalaniladi
    constructor(name:string, age:number){
        this._name = name
        this._age = age
    }

    // method - classda hohlagancha method yozishimiz mumkin
    info(value: number):string {
        return `${this._name} ${value} yildan keyin ${this._age + value} yoshda`
    }

    // statik field - statik maydon classda hohlagancha method yozishimiz mumkin
    static isFlaying = false 
    static description(): string {
        return `Bu class Person haqida ....`
    }

    get name(): string{
        return this._name
    }
    set name(value:string){
        this._name = value
    }

    get age(): number{
        return this._age
    }
    set age(value:number){
        if(value > 0 && value < 100){
            this._age = value
        }else{
            throw new Error('Yosh xato kiritildi')
        }
    }

}

const islom: Person = new Person('Islom', 23)
const asom: Person = new Person('Asom', 21)

console.log(islom)
console.log(asom)

console.log(asom.info(3))
console.log( Person.isFlaying )
console.log( Person.description() )

islom.age = 50
islom.name = 'Islom Karimov'

console.log(islom)
console.log(islom.name)
console.log(islom._name)

if(islom instanceof Person){
    console.log('islom personga tegishli')
}else{
    console.log('islom personga tegishli emas')
}

if({} instanceof Person){
    console.log('{} personga tegishli')
}else{
    console.log('{} personga tegishli emas')
}
