//pasos para consumir un api

//1.Definir el URL del api a consumir

//2.Configurar la peticion

//Llamar a FETCH

async function consumirApi(){
    let url="localhost:8080/usuarios" //pa donde vas
    let peticion={
        method:"POST",
        headers:{},
        body:JSON.stringify()
    } //a hacer que ?
    let respuestaServidor=await fetch(url,peticion) //el taxi para ir
    return await respuestaServidor.json() 
}