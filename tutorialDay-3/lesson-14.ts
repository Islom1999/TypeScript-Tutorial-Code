// generic - extends, ternar
// =============================================
type A1<T> = T
//   hamma tiplarni ham olayapti
type B1 = A1<string>
type C1 = A1<'TS'>
type D1 = A1<number>

//  typelarni takshirsak bo'ladi kelsa oladi

// type A2<T extends string | boolean> = T
type A2<T> = T extends string | boolean ? string : never 

type B2 = A2<string>
type C2 = A2<'TS'>
type D2 = A2<false>
type E2 = A2<number>   // never tip bo'ladi

// =================================================
// function
function getName<T extends {name: string}>(person: T):void {
    console.log(person.name)
}
getName({name: 'Islom', age: 23})

//interface
interface IName {
    name: string
}
function getName1<T extends IName>(person: T):void {
    console.log(person.name)
}
getName({name: 'Islom', age: 23})

// ---------------
interface Inter {
    a: string
    b: boolean
    c: number
}

// interface ni keylarini olish uchun keyof kalit so'zi bor
// type InterKeys = keyof Infer;  // a | b | c/

//----------------- 
function getProperty<ObjType, ObjKey extends keyof ObjType>(obj:ObjType,key: ObjKey){
    return obj[key]
} 

// res - tipi obj ni keylaridan oladi
const res =  getProperty({name: 'Islom', age: 24}, "age") 
console.log(res)













