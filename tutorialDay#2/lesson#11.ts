
// Namespase

namespace Utils{

    // ushbu funksiyani tashqarida qo'llash uchun export qilish kerak

    export function log(text:string, color:string, fontSize?:string): void{
        if(fontSize){
            console.log(`%c ${text}`, `color: ${color}; font-size: ${fontSize}`)
        }else{
            console.log(`%c ${text}`, `color: ${color};`)
        }
    }

    log('Islom', "red", "40px")
    log('Karimov', "blue")
}

Utils.log("Nimadur", 'green')


//  Animals namespace ni bir nechta qilib yozsa ham bo'ladi qiymatlar yigib boriladi
namespace Animals{
    export abstract class Animal{
        protected name:string

        constructor(name:string){
            this.name = name
        }

        abstract say(): void
    }
}

namespace Animals{
    export class Tiger extends Animals.Animal{
        private sound:string;
        #sound:string;           //- es6 dan keyin #variable bo'lsa bu variable private bo'ladi
        // farqi comlatsiyada private js ga private compilatsiya bo'lib ketadi err bo'lsa ham #value compilatsiya bo'lmaydi 

        constructor(name:string, sound:string){
            super(name)
            this.sound = sound
            this.#sound = sound
        }

        say(): void {
            Utils.log(`${this.name} - ${this.sound} - ${this.#sound}`, 'red', '24px')
        }
    }

    // namespace ichida ham namespace dan foydalanish mumkin
    export namespace Pets{
        export class Cat extends Animals.Animal{
            private sound: string

            constructor(name:string, sound:string){
                super(name)
                this.sound = sound
            }

            say():void{
                Utils.log(`${this.name} - ${this.sound}`, 'red', '24px')
            }
        }
    }
}

const tiger = new Animals.Tiger('Sherxon', 'RRRRRR')
const cat = new Animals.Pets.Cat('Mushuk', 'Miyav')

tiger.say()
cat.say()

// console.log( tiger.sound )
// console.log( tiger.#sound )




