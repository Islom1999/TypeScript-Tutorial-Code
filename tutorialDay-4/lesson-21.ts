
abstract class ComputerFile{
    abstract name: string
    abstract set size(value:number)
    abstract get size(): number
    abstract show(): void
}

class TextFile extends ComputerFile{
    name: string
    size: number

    constructor(name:string, size: number){
        super()
        this.name = name
        this.size = size
    }

    show(): void{
        console.log(this.size)
    }
}

namespace Photo {
    export class JPEG {}
    export class PNG {}
}

module Vedeos{
    export class MP4 {}
    export class EVI {}
}



