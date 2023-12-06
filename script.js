const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(() => {
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

})


//Funcion de calcular el tiempo que tiene el sistema
function calcularTiempo() {
    let tiempo = new Date();

    //Obtenemos la hora, minutos, segundos con ayuda de metodos
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    //Declaramos una variable que guardara si es PM o AM
    let amPm = 'am';

    //Reasignación de valor para cambiar el formato de hora minuto y segundo para que aparezcan los ceros
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Reasignamos el valor de hora para cambiar el formato de hora militar a AM y PM
    amPm = hora >= 12 && hora != 24 ? "pm" : amPm;
    hora = hora > 12 ? hora - 12 : hora;

    //Para que aparezca como las doce de la mañana
    hora = hora == 0 ? 12 : hora;

    //Con este elemento la posicion del reloj digital cambia dependiendo de la hora que marque el analogo
    hora >= 10 || hora <= 2 ? document.getElementById('reloj').style.marginTop = "120px" : document.getElementById('reloj').style.marginBottom = "120px";

    //Esto se devolvera con innerHtml para que aparezca con los datos obtenidos
    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + amPm;

    //Usando un jquery vamos a guardar el reloj con la clase de .reloj en el html
    let relojDigital = document.querySelector(".relojDigital");

    //Insertamos usando el innerHtml para que se envie a la pantalla del reloj
    relojDigital.innerHTML = pantallaReloj;

}

//Se llama la funcion de calcular Tiempo y se ejecutara cada mil milisegundos = un segundo
setInterval(calcularTiempo, 1000); 