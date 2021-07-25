<html>
    <head>
        <title>Eliminar registro</title> 
    </head>
    <body>
        <?php
        $host="localhost";
        $user="root";
        $pw="";
        $bd="bdprueba";
        
        $conexion=mysqli_connect($host, $user, $pw, $bd) or die  ("Error en la conexion");
        
        $nombre=$_POST['nombre'];
        
        mysqli_query($conexion, "DELETE from registro where nombre='$nombre'") or die ("Error al eliminar el registro");
        
        mysqli_close($conexion);
        echo "Datos eliminados correctamente";
        ?>
    </body>
</html>