

function cambiar_razas_perro() {


    let raza = document.getElementById("boton").value;
    console.log(raza)

    let cambiar_endpoint = `https://dog.ceo/api/breed/${raza}/images/random`;
    console.log(cambiar_endpoint)

    //PASO 1: instanciamos XMLHttpRequest, para consumir datos del API rest

    xhr = new XMLHttpRequest();
    xhr.open('GET', cambiar_endpoint, true);

    //PASO 3:
    xhr.onreadystatechange = () => {

        //---INICIO VALIDACIONES----
        if (xhr.readyState === 4) {
            console.log("status 4 ok")
            if (xhr.status === 200) {
                console.log("status 200 ok");
                //---FIN VALIDACIONES----


                //Captura de datos del objeto
                objeto_info_dog = JSON.parse(xhr.responseText);

                console.log(objeto_info_dog.message)

                enviar_info_al_contenedor(objeto_info_dog)

            }

        }
    }
    xhr.send();
}



//---------FUNCION------------------------

//Esta funcion creada un elemento div en el DOM, donde se mostrara la imagen de los perros
function enviar_info_al_contenedor(objeto_info_dog) {

    let contenedor_info_api = document.getElementById("contenedor_info_api");

    let mostrar_info = document.createElement("i")
    mostrar_info.innerHTML =
        `
        <img src = "${objeto_info_dog.message}" class="imagen">
        `
    contenedor_info_api.appendChild(mostrar_info);

}



//------------EVENTO----------------
//Revisar la documentación sobre change: https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event
boton.addEventListener("change", cambiar_razas_perro)
