
function solicitud(datos){
    console.log(`funcion no asincrona`);
    return new promise(resolve => setTimeout(resolve, datos));
   
}


async function f(){
    console.log(`inicio de funcion asincrona`);
    await request(2000)
    
    console.log(`terminamos ejecucion de funcion asincrona`)
    }

function bigFuction(){
    console.log(`funcion normal ejecutada`)
    let result = 0;
    for(let i= 0; i < 1e7; i++){
         sum += i;
    }
    console.log(`funcion normal terminada`, result);
}

//f();
//bigFuction();

const COUNTER_P = document.getElementById(`counter`);
let counter = 0;

document.getElementById(`btn-counter`)
.addEventListener(`click`, async (e) => {
    await setTimeout(() => {
        counter++;
        COUNTER_P.textContent = counter;


    }, 2000);

})