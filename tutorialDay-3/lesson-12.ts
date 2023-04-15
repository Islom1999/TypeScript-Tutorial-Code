// Generic Type

type A<T> = T
type X<name> = name  //  name generic type yani o'zimiz qiymat yuborib hosil qilamiz

type B = A<string>    // b = string
type C = A<number>    // c = number
type D = A<boolean>   // d = boolean

type E = A<"TS">      // e = "TS" 

let arr1: number[] = [1,2,3]
let arr2: Array<string> = ['ad', 'fvs']


// array generic type
type MyArray<T> = T[]     // array generic type

const arr3: MyArray<Boolean> = [false, true]
const arr4: MyArray<Boolean | number> = [false, true, 12,42]



// function generic type 
//example 1
function echo<T>(x:T):T {
    return x
}
const a1 = echo(23)
const a2 = echo('salom')
const a3:string = echo('salom')

// exaple 2
const echo1 = <T>(x:T): T => {
    return x
}
const a4 = echo(23)
const a5 = echo('salom')
const a6:string = echo('salom')
const a7 = echo<string>('salom')

// exaple 3
const echo3:<T>(x:T) => T = <T>(x:T) => {
    return x
}
// exaple 4
type ECHO = <T>(x:T) => T
const echo4: ECHO = <T>(x:T) => {
    return x
}
















