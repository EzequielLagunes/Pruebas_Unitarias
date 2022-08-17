/*
Una prueba unitaria es una prueba automatizada que tiene como objetivo verificar la funcionalidad de una unidad de codigo. Entendemos "unidad de codigo" como la parte mas pequeña testeable de una aplicacion, pueden ser:

    - Rutinas
    - Funciones
    - Metodos

    Ventaja de las pruebas unitarias

El escribir pruebas unitarias nos va a permitir asegurarnos que el código funciona segun lo esperado, además de encontrar errores de forma mucho mas facil y poder realizar modificaciones sin comprometer otros elementos del programa. Tambien nos permite garantiazar que cuando el codigo siga evolucionando o escalando y se implementen nuevas caracteristicas, las caracteristicas mas antiguas siguen funcionando como antes y no se rompan debido a los nuevos cambios.


Las pruebas unitarias de JavaScript normalmente se ejecutan en el explorador o en el front-end, y al realizarlas debemos tener en cuenta los siguientes aspectos:

    - La caracteristica que se está probando
    - El resultado final
    - El resultado esperado


*/

function promedio (calificacion1, calificacion2, calificacion3){

    let calificacionFinal = (calificacion1 + calificacion2 + calificacion3) / 3;
    if (calificacionFinal >=6){
            console.log("Felicidades, estas aprobado.");
    }else (console.log("Necesitas estudiar mas, no has aprobado."));
}
promedio (0, 7, 10);



/*
Consideraciones para que JEST trabaje

1.- almacenar las funciones a testear en una consola del tipo objeto
2.- explotar estas funcines, para que esten disponible en cualquier lugar
importat o al menos agregar la dirección de donde vienen esas funciones test.js


*/