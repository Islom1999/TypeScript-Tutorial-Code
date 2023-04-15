
import {ID} from './utils'

interface IProduct {
    id:number
    name:string
    amount:number
}

class Product implements IProduct{
    readonly id: number = ID.getNewID()
    readonly name: string 
    readonly amount: number

    constructor(name:string, amount:number){
        this.name = name
        this.amount = amount
    }
}

// export {Product}
export default Product


