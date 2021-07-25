function validar(){
    var nombre, clave, confirmacion, edad, sexo, telefono, expresion;
    nombre= document.getElementById("nombre").value;
    clave= document.getElementById("clave").value;
    confirmacion= document.getElementById("confirmacion").value;
    edad= document.getElementById("edad").value;
    sexo= document.getElementById("sexo").value;
    telefono= document.getElementById("telefono").value;
    expresion =  /\w@\w+\.+[a-z]/;
    if(nombre===""||clave===""||confirmacion===""||edad===""||sexo===""||telefono===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(edad>120){
        alert("Ingrese una edad que corresponda");
        return false;
    }
    else if(confirmacion!==clave){
        alert("La confirmacion de su contraseña es erronea");
        return false;
    }
    else if(telefono!=parseInt(telefono)){
        alert("En el campo telefono solo se debe ingresar numeros");
        return false;
    }
    else if(telefono.length>9||telefono.length<9){
        alert("El numero del telefono no es valido");
        return false;
    }
}
function color_rojo(){
    document.getElementsByTagName("a")[0].setAttribute("class","rojo_color");
}

