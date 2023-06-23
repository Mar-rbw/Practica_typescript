let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"
console.log(mensaje)

mensaje = "chao mundo"
console.log(typeof []);
let mama: string = "jaja"

/* Tipos de datos => JS
number
string
boolean
null
undefined
object //  arrays == object
function */

/* Tipos de datos => TS
any
unknown
never
Arrays
tuplas
Enums */

/* Tipos inferidos

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-rex"
let extintos: boolean = true */

/* Tipo de valor any
let mivariable
mivariable = "chanchito feliz"
mivariable = 42 */

/* Tipo de valor function

function chanchitoFeliz(config:any){
    return config
} */

/* Tipos Array

/* inferido */
/* let oAnimales = ["chanchito","feliz","felipe"] */
/* No inferido */
/* let eAnimales: string[] = ["chanchito","feliz","felipe"] */

/* let nums: number[] = [1, 2, 3]
let checks: boolean[] = [] */
/* arreglo de numbers */
/* let nums2: Array<number> = [] */

/* nums.map(x => x.) // el autocompletado sugiere métodos del tipo de dato */ 

/* Tipos tupla
 */
let tupla: [number, string[]] = [1, ["chanchito feliz","chanchito felipe"]]
