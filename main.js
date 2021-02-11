//const array = [
    //["Lunes", "Dar clases"],
    //"Martes",
    //"Miercoles",
    //"Jueves",
    //"Sabado",
    //"Domingo"
//];

//int array = int[2][2];

//let array = [
//[],
//[
    //0,1,2,3,4,5,6,7,8,9,10
//],
//[
//    0.2,4,6,8,10,12,14,16,18,20
//]
//]

const matriz = [];
let bandera = true, vacion = null;
for (let i = 0; i <= 10; i++) {
    let data = new Array(11).fill(vacion,0,11);
    for (let x = 0; x <= 10; x++) {
        if (i==3 && bandera){
            data = new Array(5).fill(vacion,0,6);
            data.unshift(vacion, "Jasbeith", "Apellido",16,true,"carrera 14a");
            bandera = false;
        } 
    }
    matriz[i] = data;
}
console.log(matriz[3][4]);





 