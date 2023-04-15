
// ! operator va foydalanuvchi malumotlarini tekshirish

interface IProduct {
    name: string
    weight?: number
}

function calcWeightProducts( products: IProduct[]): number {
    let totatWeight: number = 0

    products.forEach(elem => {
        totatWeight += elem.weight !  // aniq shu variable bo'lsa ! belgisidan foydalansak bo'ladi
    })

    return totatWeight
}

const res = calcWeightProducts([
    {name: "Product", weight: 200},
    {name: "Product", weight: 200},
    {name: "Product", weight: 200},
])

console.log(res)


// -------------------------------------

let a: number | undefined | null = null

setTimeout(() => {
    a = 20
}, 500);

setTimeout(() => {
    let b: number = a !
    console.log(b) 
}, 1000);

// ---------------------------------------

let s!: string
console.log(s)

let s1: string
console.log(s1!)

// --------------------------------------

class FrontendDeveloper { 
    isCreateApi: boolean = false
}

class BackendDeveloper { 
    isCreateApi: boolean = true

    createRestApi() {}
}

function isBackendDeveloper(developer: any): developer is BackendDeveloper{
    return developer.isCreateApi
}

function WriteCode(developer: FrontendDeveloper | BackendDeveloper){
    // if(developer.isCreateApi){
    //     developer
    // }

    if(isBackendDeveloper(developer)){
        developer.createRestApi()
    }
}










