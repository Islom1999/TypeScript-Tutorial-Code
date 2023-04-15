
//  useFull global utility types
//  Pick, Extract, Exclude, Omit

//  ----- Pick ---------

type Vector1 = {x:number, y:number, z:number}
type Vector2 = Pick<Vector1, "x" | "y">      // x,y dan tashkul topgan obj  yaratadi

//o'zimiz yaratsak
type MyPick<T, K extends keyof T> = {[P in K] : T[P]}
type Vector3 = MyPick<Vector1, "x" | "y">    // x,y dan tashkul topgan obj  yaratadi

//  ----- Extract ---------
type X1 = string | number | boolean
type Y1 = string | boolean

type Z1 = Extract<X1, Y1>    // x1 va y1 larni ikalasida mavjud bo'lgan type larni oladi

//o'zimiz yaratsak
type MyExtract<T, U> = T extends U ? T : never
type Z2 = MyExtract<X1, Y1>

//  ----- Exclude ---------
type X2 = string | number | boolean
type Y2 = string | boolean 

type Z3 = Exclude<X1, Y1>    // x1 va y1 larni ikalasida mavjud bo'lmagangan type larni oladi

//o'zimiz yaratsak
type MyAxclude<T, U> = T extends U ? never : T
type Z4 = MyAxclude<X1, Y1>


//  ----- Omit ---------
type Persons1 = {name: string, age: number, weight: number, height: number}
type Persons2 = Omit<Persons1, "weight"|"height" >    // kk bo'lmagan keylarni olib tashlab qaytaradi

//o'zimiz yaratsak
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T,K> > 
type Persons3 = MyOmit<Persons1, "weight"|"height" >

