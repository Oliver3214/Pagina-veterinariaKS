//validar datos de el form
function validarDatos() {
    var nombre, email, edad, sexo,exprecion,checkbox;
   checkbox = document.getElementById('test');
     nombre = document.getElementById("nombre").value;
     email = document.getElementById("email").value;
     edad = document.getElementById("selectorEdad").value;
     sexo = document.getElementById("sexo").value;
    exprecion = "\w+@\w+\.+[a-z]/";
     if (nombre === "" || email === "" || Edad  ==="" || sexo ==="") {
         alert("los campos no estan validados");
         return false;
     }
    else if (nombre.length> 50) {
        alert("el nombre es demaciado largo");
        return false;
    }
    else if (email.length>50) {
        alert("el email es demaciado largo");
        return false;
    }
    else if (edad.length>10) {
        alert("la edad no coincide");
        return false;
    }
    else if(!exprecion.test(email)){
        alert("el correo no es valido");
        return false;
    }

    checkbox.addeventlistener
   checkbox.addEventListener("change", validaCheckbox, false);
   
   function validaCheckbox(){
     var checked = checkbox.checked;
     if(checked){
       alert('checkbox esta seleccionado');
     }
   }
   
}

//select edad
function opcionesSelector(params) {
    //selecciona el objeto por el id
 let selectorEdad  = document.getElementById("selectorEdad");
 //selecciona los objetos segun el nombre 
 let selectores = document.getElementsByTagName("select");
 //imprime en la consola 
 console.log(selectores);
//define un bucle for para dar opciones 
 for (let index = 1; index <= 115; index++) {
     //el let es igual a un dim 
     let opt = document.createElement("option"); // crear un option
     opt.value = index;
     //con el simbolo mas se separan y anidan caracteres
     opt.innerHTML =  index + "años";
     selectorEdad.appendChild(opt);
     
 }
}

//validacion del checkbox
function validacioncheck() {
    var Checkbox = document.getelementby('test');
 var checkbox = document.getElementById('test');
 checkbox.addeventlistener
checkbox.addEventListener("change", validaCheckbox, false);

function validaCheckbox(){
  var checked = checkbox.checked;
  if(checked){
    alert('checkbox esta seleccionado');
  }
}
}

