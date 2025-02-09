console.log("Documento: Variables.js");
//Variables
//Diferentes maneras de declarar variables
var nombre = "Marco";
let apellido = "Meza";
const numero = "6677983885";
console.log(nombre, apellido, numero)//imprimir las 3 variables separadas con comas

const nombres = "Marco Josue";
console.log(nombres)
//persona="hola "//No se puede editar un const
const Array = ["Diego", "Hank", "Sebas"]//Crea una variable array
console.log(Array);
Array.push("Antonio");//Agregamos un valor con push al Array
console.log(Array);//Podemos editar el const

const persona = { //con corchetes podemos declarar claves
    nombre: "Dul",
    edad: 21
}
persona.nombre = "Marco Josue" //Con la Variable+Clave podemos editar el valor
console.log(persona)

////////////////////////////////////
let Nombre = "Marco Josue";
let animal = new String("Poppy");
console.log(Nombre, animal);
console.log(Nombre.length);//Lenght para calcular el tamaño 

console.log(Nombre.toLowerCase());//REfleja todos los aracteres en minusculas
console.log(Nombre.toUpperCase());//Refleja todos los caracteres en mayusculas

let poema;
poema="Dile a tu silencio que no me grite tanto, ya entendí";
poema.includes("silencio");//Busca la palabra seleccionada "silencio"

if(poema.includes("silencio")){//Jugamos con las condicionantes 
    console.log(Nombre, poema.includes("silencio"));
}

console.log(poema.trim())//metodo para eliminar los espacios en blanco innecesarios
console.log(poema.split(" "))//metodo para convertir una cadena de texto en un arreglo seprandolo por caracter especificado

let saludo="Hola, mi nombre es "+Nombre+" "+apellido
console.log(saludo)//Maneras primitivas de conctenar texto

let saludo2=`Hola, mi nombre es ${nombre} ${apellido}`//Template Strings (Usar acento inverso ``)
console.log(saludo2)

let informacion=`
<script>
    console.log("Hola Mundo")
</script>`;
console.log(informacion);

console.log("HOLA MUNDO")

////////////////////////////////////
let a=2;
let b= new Number(3);
console.log(typeof(a) ,typeof(b), typeof(nombre))//Declara ek tipo de valor de la variable
console.log(a, b)
let pi=3.14159256
console.log(pi.toFixed(4));//Redondea el numero de decimales al indicado
console.log(parseInt(pi));
let num="17.8"
console.log(a+num);//ERROR, se concatena el texto con el numero
console.log(a+parseInt(num));//No toma en cuenta el decimal por ser INT
console.log(a+parseFloat(num));//Resultado correcto
console.log(b+Number.parseFloat(num));//Se llama al metodo Number (no es necesario)
console.log(parseInt(a+b+parseFloat(num)+pi));

////////////////////////////////////
//FUNCIONES//
function funcionPrueba(){//LAS FUNCIONES DECLARADAS SE PÚEDEN MANDAR A LLAMAR EN CUALQUIER LUGAR
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
}

function regresaValores() { 
    return "console.log(nata=1);"
}

let nata=regresaValores();//LAS FUNCIONES EXPRESADAS(EN UNA VARIABLE) NO SE PUEDEN MANDAR A LLAMAR EN CUALQUIER LUGAR
console.log(nata);

function recibeValores(nombreZ="Nata", edad=21, numer=10) {
    //console.log("Hola "+nombre+" tu edad es "+edad);
    console.log(`Hola ${nombreZ} tu edad es ${edad}`);
    return numer;
}

recibeValores(nombreZ="Muzska", edad=22);
recibeValores();
let suma=recibeValores()+20;
console.log(suma);


/////////////ARREGLOS/////////////////
const vector=["Hola", "Mundo", 7000];
console.log(vector)

const v2=[1,2,3, ["uno", "dos", "tres"]];
console.log("numero="+v2[3][1])

const colores=["Red", "Green", "Blue"];
console.log(colores)

colores.push("Black") //agrega un elemento al final
console.log(colores)

colores.pop() //borra el elemento del final
console.log(colores)

colores.forEach(
    function(el){
        console.log(el)
    }
)


//////////////OBJETOS//////////////
let palabra=new String("Hola");//SE DICE QUE TODO EL JS ES UN OBJETO
console.log(palabra)

const objeto=new Object//CON SIMPLES PARENTESIS SE CREA UN OBJETO

const objetoPersona={
    nombre:"Marco",
    apellido:"Meza",
    edad:21,
    sexo:"si",
    contacto:{
        telefono:"6677983885",
        correo:"dullspectre@gmail.com"
    },
    saludar: function(){
        console.log("Hola mi nombre es "+this.nombre+" "+this.apellido)
    }
};

console.log(objetoPersona)
console.log(objetoPersona["nombre"])

objetoPersona.saludar();//mandar a llamar el metodo "saludar"
////////////OBJETOS FUNCIONALES////////////
let nombre_perro="Popy", edad_perro=4;

const perro = {
    nombre: nombre_perro, 
    edad: edad_perro,
    ladrar: function ladrar() {
        console.log("woff woff")
    }
}

console.log(perro);
perro.ladrar();

const dog = {
    nombre_perro,
    edad_perro,
    ladrar(){
        console.log("guauu guauu")
    }
}
console.log(dog)
dog.ladrar();


////////REST y Operador Spread////////
function operaciones(a, b, ...c) {
    let Resultado = a + b

    c.forEach(function (n) {
      Resultado += n;
    })

    return Resultado;
}
console.log(operaciones(1, 2, 3, 4, 20))

const arreglo_1=[1,2,3,4,5];
const arreglo_2=[6,7,8,9,10];

const arreglo_3 = [arreglo_1, arreglo_2] //Se crea un arreglo con 2 arreglos dentro
const arreglo_3_1=[...arreglo_1, ...arreglo_2]; //Se agregan los contenidos de los 2 arreglos
console.log(arreglo_3)
console.log(arreglo_3_1[9])

//////ARROW FUNCTIONS//////
//Se crean de la siguiente manera:
let x, y, sumatoria;
sumatoria = (y, x) => x+y+10;
console.log(sumatoria(1,2));

sumatoria = (nombre) => {
    return ("hola "+nombre)
}

console.log(sumatoria("Dull spectre"));

/////PROTOTIPOS/////
//INTRODUCCION A POO:
/*
CLASES.-Modelo a seguir
OBJETOS.-Es una instancia de una clase
ATRIBUTOS.-Caracteristicas o propiedades de los objetos
METODOS.-Son acciones que un objeto puede realizar
*/

//FUNCION CONSTRUCTORA
function Automovil(marca, sub_marca,modelo) {
    this.marca = marca;
    this.sub_marca = sub_marca;
    this.modelo = modelo;
    this.sonido = function () {
        console.log("brrum brruum")
    }
}

console.log(new Automovil("Toyota", "Corolla", "2017"));
console.log(new Automovil("Honda", "Civic", "2025"));
//////////////////   
