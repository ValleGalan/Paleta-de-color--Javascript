//re recomienda acceder por ID ya que es unico
const color= document.querySelector("#color");
const salida =document.querySelector("#salida");
const salidaTexto=document.querySelector("#salidaTexto");

color.addEventListener("input",()=>{
    const seleccionValor= color.value;//valor del color
    
    salida.innerHTML =seleccionValor; //para reemplzar el html innerHTML 
    salida.style.background=seleccionValor; 
    salida.style.color="#fff"; 

    salidaTexto=seleccionValor; //CORREGIR 
    console.log(seleccionValor);
    
})
 
