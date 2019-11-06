<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=McLaren|Raleway:100,100i,200,200i,300,300i,400,400i,500,700|Signika&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC|McLaren|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Signika&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bdd.css">
    <title>Document</title>
</head>
<body>
<div class="contenedor">
        <div class="content-m">
            <div class="textos">
                <h1 id="hola">Su informacion se envio exitosamente</h1>
                <a id="a" href="index.php" >Regresar</a>
            </div>
        </div>
    </div>
</body>
</html>
<?php
    $servidor="localhost";
    $usuario="root";
    $contra="";
    $db="veterinaria3";
    $conexion=mysqli_connect($servidor, $usuario, $contra, $db);
    if ($conexion) {
        $nombre=$_POST['t1'];
        $email=$_POST['t2'];
        $edad=$_POST['t3'];
        $sexo=$_POST['t4'];
        $mensaje=$_POST['t5'];
        if (isset($_POST['bt1'])) {
            $a="INSERT INTO DATOS (nombre, email, edad, sexo, mensaje) VALUES('".$nombre."','".$email."','".$edad."','".$sexo."','".$mensaje."')";
            $ba=mysqli_query($conexion,$a);
        }
    }
?>