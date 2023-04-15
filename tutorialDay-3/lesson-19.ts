// Utils
// Parameters, ConstruktorParameters, ReturnTypes, InstanceTypes

// -------- Parameters --------

function function1(x:string, y:number):boolean{
    return x.length > y.toString().length
}

type A10 = typeof function1
type B10 = Parameters<A10>   // [string, number]

// o'zimiz yozib ko'ramiz
type MyParamets<T extends (...args: any) => any> = T extends (...args: infer U) => any ? U : never
type B20 = MyParamets<A10>   // [string, number]


// -------- ConstruktorParameters --------

class Class1 { 
    a:number
    b:number

    constructor(a:number, b:number){
         this.a = a
         this.b = b
    }
}

type C10 = typeof Class1               //Class1
type D10 = ConstructorParameters<C10>  //[number,string]

// o'zimiz yozib ko'ramiz
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer U) => any ? U : never
type D20 = MyConstructorParameters<C10>  //[number,string]


// -------- ReturnTypes --------

type E10 = ReturnType<A10>      // funksiya qaytaradigan returni tipi

// o'zimiz yozib ko'ramiz
type MyRetyrnType<T extends (...args: any) => any> = T extends (...args: any) => infer U ? U : never
type E20 = MyRetyrnType<A10>


// -------- InstanceTypes -------

type F10 = InstanceType<C10>  // Class1

// o'zimiz yozib ko'ramiz
type MyInstanceType <T extends new (...args: any) => any> = T extends new (...args: any) => infer U ? U : never

type F20 = MyInstanceType<C10>  // Class1

