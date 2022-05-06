alert("Estoy vivo!");

dia= prompt("Ingresa tu día de nacimiento");
mes= prompt("Ingresa tu mes de nacimiento (CON NUMERO)");

if (dia>31)
console.log("INGRESA UNA FECHA VÁLIDA");
else
{switch(mes)
    {

    case "1" : //ENERO
        if (dia<=20)
        console.log("Tu signo del zodiaco es: CAPRICORNIO");
        else
        (console.log("Tu signo del zodiaco es: ACUARIO"));
    break;

    case "2" : //FEBRERO
        if (dia<=18)
        console.log("Tu signo del zodiaco es: ACUARIO");
        else
        console.log("Tu signo del zodiaco es: PISCIS");
    break;

    case "3" : //MARZO
        if (dia<=20)
        console.log("Tu signo del zodiaco es: PISCIS");
        else
        console.log("Tu signo del zodiaco es: ARIES");
    break;

    case "4" : //ABRIL
        if (dia<=20)
        console.log("Tu signo del zodiaco es: ARIES");
        else
        console.log("Tu signo del zodiaco es: TAURO");
    break;

    case "5" : //MAYO
        if (dia<=21)
        console.log("Tu signo del zodiaco es: TAURO");
        else
        console.log("Tu signo del zodiaco es: GEMINIS");
    break;

    case "6" : //JUNIO
        if (dia<=21)
        console.log("Tu signo del zodiaco es: GÉMINIS");
        else
        console.log("Tu signo del zodiaco es: CÁNCER");
    break;

    case "7" : //JULIO
        if (dia<=22)
        console.log("Tu signo del zodiaco es: CÁNCER");
        else
        console.log("Tu signo del zodiaco es: LEO");
    break;

    case "8" : //AGOSTO
        if (dia<=23)
        console.log("Tu signo del zodiaco es: LEO");
        else
        console.log("Tu signo del zodiaco es: VIRGO");
    break;

    case "9" : //SEPTIEMBRE
        if (dia<=23)
        console.log("Tu signo del zodiaco es: VIRGO");
        else
        console.log("Tu signo del zodiaco es: LIBRA");
    break;

    case "10" : //OCTUBRE
        if (dia<=23)
        console.log("Tu signo del zodiaco es: LIBRA");
        else
        console.log("Tu signo del zodiaco es: ESCORPIO");
    break;

    case "11" : //NOVIEMBRE
        if (dia<=22)
        console.log("Tu signo del zodiaco es: ESCORPIO");
        else
        console.log("Tu signo del zodiaco es: SAGITARIO");
    break;

    case "12" : //DICIEMBRE
        if (dia<=21)
        console.log("Tu signo del zodiaco es: SAGITARIO");
        else
        console.log("Tu signo del zodiaco es: CAPRICORNIO");
    break;

default: ("INGRESA UNA FECHA VÁLIDA");

    }
}