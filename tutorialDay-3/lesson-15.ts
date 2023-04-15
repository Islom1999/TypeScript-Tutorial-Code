
// generic array
// -----------===============================
let arr = [1, 'string', false]

// infer arr tiplarini koradi - chart bilan ishlaydi
type A3<T> = T extends (infer U)[] ? U : never

type B3 = typeof arr 

type C3 = A<B3>

// generic obj 
// -------------=============================
const person = { name: 'Islom', age: 23 }
type A4<T> = T extends {
    [key: string]: infer U
} ? U : never

type B4 = typeof person

type C4 = A4<B4>

// generic class 
// ---------------------=======================
class Cat {
    say():void{
        console.log('miyav')
    }
}
class Dog {
    say():void{
        console.log('Vovvv')
    }
}
interface IClass<T> {
    new(): T
}
function createObject<T> (clas: IClass<T>){
    return new clas()
}
let cat = createObject(Cat)
cat.say()

let dog = createObject(Dog)
dog.say()