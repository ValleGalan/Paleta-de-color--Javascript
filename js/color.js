//re recomienda acceder por ID ya que es unico
const color= document.querySelector("#color");
const salida =document.querySelector("#salida");

color.addEventListener("input",()=>{
    const seleccionValor= color.value;//valor del color
    salida.innerHTML =seleccionValor; //para reemplzar el html innerHTML 
})