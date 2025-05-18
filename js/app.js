//persona
let personaUno = null
class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #nacimiento;
    constructor(nombrep, edadp, dnip, sexop, pesop , nacimientop) {
      this.#nombre = nombrep;
      this.#edad = edadp;
      this.#sexo = sexop;
      this.#peso = pesop;
      this.#nacimiento = nacimientop;
      this.#dni = dnip;
    }
    MostrarGeneracion =()=>{
        if(this.#nacimiento>=1994&&this.#nacimiento<=2010){
            ultarea.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
           <br>eres de la generacion Z!
           <ul><li>POBLACION DE LA GENERACION: 7.800.000</li><li>CIRCUNSTANCIA HISTORICA: expansion masiva del internet</li><li>RASGO CARACTERISTICO: irrelevancia</li></ul>
      </li>
    `;
        }else if(this.#nacimiento>=1981&&this.#nacimiento<=1993){
            ultarea.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
           <br>eres de la generacion Y!
<ul><li>POBLACION DE LA GENERACION: 7.200.000</li><li>CIRCUNSTANCIA HISTORICA: inicio de la digitalizacion</li><li>RASGO CARACTERISTICO: frustracion</li></ul>
      </li>
    `;
        }else if(this.#nacimiento>=1969&&this.#nacimiento<=1980){
            ultarea.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                 <br>eres de la generacion X!
<ul><li>POBLACION DE LA GENERACION: 9.300.000</li><li>CIRCUNSTANCIA HISTORICA: Crisis del 73 y transicion española</li><li>RASGO CARACTERISTICO: Obsesion por el exito</li></ul>
            </li>
          `;
        }else if (this.#nacimiento>=1949&&this.#nacimiento<=1968){
            ultarea.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                 <br>eres de la generacion Baby Boom!
<ul><li>POBLACION DE LA GENERACION: 12.200.000</li><li>CIRCUNSTANCIA HISTORICA: paz y explosion demografica</li><li>RASGO CARACTERISTICO: ambicion</li></ul>
            </li>
          `;
        }else if (this.#nacimiento>=1930&&this.#nacimiento<=1948){
            ultarea.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                 <br>eres de la generacion Silent Generation(los niños de la postguerra)
<ul><li>POBLACION DE LA GENERACION: 6.300.000</li><li>CIRCUNSTANCIA HISTORICA: conflictos belicos</li><li>RASGO CARACTERISTICO: Austeridad</li></ul>
            </li>
          `;
        }else{
            ultarea.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                los datos de su generacion no han sido encontrados
            </li>
          `;
        }
      }
      mayorMenor= ()=>{
        if(this.#edad>=18){
            ultarea.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          eres mayor de edad!
      </li>
    `
        }else{
            ultarea.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                no eres mayor de edad  >:(
            </li>
          ` 
        }
      }
}
//metodos
  const crearPersona = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("Nombre").value;
  const edad = document.getElementById("edad").value;
  const DNI = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = document.getElementById("pesoyaltura").value;
  const nacimiento = document.getElementById("nacimiento").value;
  nombrePersona.textContent = `Persona: ${nombre}`;
  formulario.classList.add("d-none");
  h2ocultar.classList.add("d-none");
  persona.classList.remove("d-none");
  personaUno = new Persona(nombre,edad,DNI,sexo,peso,Number(nacimiento))
console.log(personaUno)
return(personaUno)
};
const formulario = document.getElementById("miform");
const persona = document.getElementById("persona");
const nombrePersona = document.getElementById("nombrePersona");
const h2ocultar = document.getElementById("hdosocultar")
const btnmostrar = document.getElementById("mostrarGeneracion")
const btnMayorDeEdad = document.getElementById("mayorDeEdad")
const ultarea = document.getElementById("ultarea");
//eventos
formulario.addEventListener("submit", crearPersona);
btnmostrar.addEventListener("click", () => {
    if (personaUno) {
      personaUno.MostrarGeneracion();
    }});
  btnMayorDeEdad.addEventListener("click", () => {
    if (personaUno) {
      personaUno.mayorMenor();
    }});