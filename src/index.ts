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
/* let tupla: [number, string[]] = [1, ["chanchito feliz","chanchito felipe"]]

Error en Typescript

tupla.push(12) */ // No arroja error indicando que no podemos realizar dicha acción

/* /* Tipos Enums */

// PascalCase
enum  Talla {
    Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl"
} 

const varible1 = Talla.Grande
console.log(varible1)

//Colocando la palabra reservada const antes del enum para que nos genere un código más reducido.
//De esta manera, solamente se van asignar los valor en el codigo final de JS,
//siempre y cuando hayamos creado const o var que contenga un valor dentro de nuestro enum 
/* const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success
 */ 

/* Tipo object */
/* const objeto: {
    /* readonly es util cuando estan viendo datos
     desde la base de datos y queremos que la id 
     sea reescribible */
    //readonly id: number,
    /* ? = -> es opcional al momento definir un objeto */
    /* nombre?: string, */
    //nombre: string,
    //talla: Talla,
//} = {id: 1, nombre:'Hola Mundo', talla: Talla.Mediana}

/* objeto.nombre = "Hola mundo" -> solo en JS */

/* Definición de tipo */

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
/*     Otra versión
    direccion: {
        numero: number,
        calle: string,
        pais: string
    }     */
}

const objeto: Persona = {
    id:1,
    nombre: "Hola Mundo",
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: "Siempre viva",
        pais: "Chanchitolandia"
    }

}

