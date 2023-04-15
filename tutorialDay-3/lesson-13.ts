// generic Class

// ==================================
class List<T>{
    elements: T[] = []

    add(element: T): void{
        this.elements.push(element)
    }
}

let list = new List<number | string>()
list.add(12)
list.add('salom')
console.log(list.elements)

let list2 = new List<boolean | undefined>()
list2.add(true)
list2.add(undefined)
console.log(list2.elements)

//=================================
// interface generic
interface IList<T> {
    elements: T[] 
    add(element: T): void

    // new(name:string, age:number): void
    // new(): void
}

type listType = string | number | boolean

class List2 implements IList<listType>{
    elements: listType[] = []

    add(element: listType): void {
        this.elements.push(element)
    }
}

let list3 = new List2()

list3.add('sdfds')
list3.add(12)
list3.add(false)

console.log(list3.elements)