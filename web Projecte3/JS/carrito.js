document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    // let btnBorra = document.getElementById("borra");
    // btnBorra.addEventListener("click", borraDades);

    let btnsComprar = document.querySelectorAll(".comprar");

    let clau = "";

    for(i = 0; i < btnsComprar.length; i++){

        btnsComprar[i].addEventListener('click', (e) => {

            img = e.target.parentElement.querySelector(".img").src;
            model = e.target.parentElement.querySelector(".model").innerText; 
            marca = e.target.parentElement.querySelector(".marca").innerText;
            preu = e.target.parentElement.querySelector(".preu").innerText;
            clau = e.target.parentElement.querySelector(".comprar").id;

            let persona = "";

            for(i = 0 ; i <= localStorage.length ; i++ ){
                
                let key = localStorage.key(i)

                if(clau == key){

                    info = localStorage.getItem(key);
    
                    persona = JSON.parse(info);

                    persona.quant += 1;

                    break;

                } else {

                    persona = { 
                        img: img,
                        model: model,
                        marca: marca,
                        preu: preu,
                        quant: 1
                    };

                }
            }
        
            
            const myJSON = JSON.stringify(persona);
                
            localStorage.setItem(clau, myJSON);
        

        });

    }

}



function borraDades(){

    if(confirm("Estàs segur que vols esborrar?")){

        localStorage.clear();
        
        carregarDades();
        esborrarCamps();
    }
}

function esborrarCamps(){

    document.getElementById("nom").value = "";
    document.getElementById("edat").value = "";
    document.getElementById("ciutat").value = "";

}

function esborraItem( id ){

    if(confirm("Estàs segur que vols esborar el Item?")){
        localStorage.removeItem(id)

        carregarDades();
        esborrarCamps();
    }

}
