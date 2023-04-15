
// Utils
// Partials, Required, Nonnuble, Record

// ------ Partials util --------------

type Person1 = {name:string, age:number}
type Person2 = Partial<Person1>

// o'zimiz partials yaratamiz
type MyPartial<T> = {[P in keyof T]: T}
type Person3 =  MyPartial<Person1>


// ------ Required util ---------------

// optional - kiritmasa ham bo'ladi
type Animal1 = {name?: string, weight?: number}
//  required - kiritish majburiy
type Animal2 = Required<Animal1>

// o'zimiz Required yaratamiz
type MyRequired<T> = {[P in keyof T] -? : T[P] }
type Animal3 = MyRequired<Animal1>


// ------ Nonnuble util ---------------
// mavjud qiymatlarni qaytarish
type Color1 = string | null | undefined | number | boolean
type Color2 = NonNullable<Color1>

// o'zimiz Nonnuble yaratamiz
type MyNonNullable<T> = T extends null | undefined ? never : T
type Color3 = MyNonNullable<Color1>

// ------ Record util ---------------

type Dimension1 = {width: number, height:number, length:number}
type Dimension2 = Record<"width" | "height" | "lenth", number | undefined>

// o'zimiz Record yaratamiz
type MyRecord<K extends string | number | symbol, T> = {[P in K] : T} 
type Dimension3 = MyRecord<"width" | "height" | "lenth", number>
type Test = keyof any








