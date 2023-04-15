// Nullish assignment vs chaining operator
//  ----------- ?? => Nullish assignment ------------------
//  ?? - ?

let a1: number | null | undefined = null
// a1 = undefined
// a1 = 2   
// ?? -- null,underfined bo'lsa o'zidan keyingi malumotni ol

// let b1: number = a1 ?? 0   //null yoki undefined bo'lsa nol qaytaradi
let b1: number = a1 || 0      //false(null, undeffined, ...) bolsa nol qaytaradi
console.log(b1)

//  || - yoki => true || false


// -------------- ? => chaining operator -------------------

const obj = {
    user: {
        name: "",
        country: {
            region: ""
        }
    }
}

const obj2 = {
    user: {
        name: "",
        country: null
    }
}


console.log( obj.user.country?.region )    // ? dan keyingi element bo'lmasa undefined qaytaradi 
// console.log( obj2.user.country?.region ) 

// ========

function add( x:number, y:number, cb?: (v:number) => void ): number{
    let natija :number = x+y

    // if(cb){
    //     cb(natija)
    // }
    cb?.(natija)

    return natija
}

const result: number = add(2,3)
console.log(result)

add(10,20, (e) => {console.log(e)})


//  ----------- ?? $$ ? ------------------

type Arr = ({price:number} | null | undefined)[]

function calcProductPrice(arr: Arr): number{
    let s = 0

    arr.forEach(item => {
        s += item?.price ?? 0  // itemni tekshiradi null yoki underfined bo'lsa 0 qo'shadi
    })

    return s
}

const result2:number = calcProductPrice([
    {price: 1},
    undefined,
    {price: 3},
    null,
    {price: 5},
]) 

console.log(result2)








