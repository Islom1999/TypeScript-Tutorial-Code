// Utils
// Readonly, ReadonlyArray


// ---------- Readonly --------------

type Article1 = {title: string, page: number}
const article1: Article1  = {title: 'Maqola1', page: 1}
article1.title = 'Text'

type Article2 = Readonly<Article1>
const article2: Article2  = {title: 'Maqola1', page: 1}
// article2.title = 'Text'   // article2 ni malumotlarini o'zgartirib bo'lmaydi

// o'zimiz yozib ko'ramiz
type MyReadonly<T> = { readonly [P in keyof T] : T[P] }
type Article3 = MyReadonly<Article1>
const article3: Article3  = {title: 'Maqola1', page: 1}
// article3.title = 'Text'   // article3 ni malumotlarini o'zgartirib bo'lmaydi

const article4 = {title: 'Maqola1', page: 1} as const  // bu ham readonly bo'ladi
const article5 = <const>{title: 'Maqola1', page: 1}    // bu ham readonly bo'ladi



// ---------- ReadonlyArray --------------

type Articles1 = Array<Article3>

const articles1: Articles1 = [
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
]
articles1.push( {title: 'Maqola1', page: 1} )   // array o'zgaradi ichidagi object o'zgarmaydi

//  ==
type Articles2 = ReadonlyArray<Article3>

const articles2: Articles2 = [
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
]
// articles2.push( {title: 'Maqola1', page: 1} )  // array ni  o'zgartirib bo'lmaydi


//  ==== 
const articles3 = [
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
] as const
// articles3.push( {title: 'Maqola1', page: 1} )  // array ni  o'zgartirib bo'lmaydi

const articles4 = <const>[
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
    {title: 'Maqola1', page: 1},
] 
// articles4.push( {title: 'Maqola1', page: 1} )  // array ni  o'zgartirib bo'lmaydi


// ------
function f1(arr: ReadonlyArray<string>){}
function f2(arr: readonly string[]){}


