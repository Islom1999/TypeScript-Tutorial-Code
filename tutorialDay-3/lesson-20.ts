// Utils
// Uppercase, Lowecase, Capitalize, UnCapitalize


type Sizes = 'sm' | 'md' | 'lg'
type U = Uppercase<Sizes>   //"SM" | "MD" | "LG"
type L = Lowercase<U>       //"sm" | "md" | "lg"
type H = Capitalize<L>      //"Sm" | "Md" | "Lg"
type unC = Uncapitalize<U>  //"sM" | "mD" | "lG"









