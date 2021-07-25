<html>
    <body>
        <?php
        
        $host="localhost";
        $user="root";
        $pw="";
        $bd="bdexamen";
        
        $conexion=mysqli_connect($host, $user, $pw, $bd) or die  ("Error a la conexion");
        
        $nombre=$_POST['nombre'];
        $clave=$_POST['clave'];
        $edad=$_POST['edad'];
        $sexo=$_POST['sexo'];
        $telefono=$_POST['telefono'];
        
        $insertar="INSERT INTO registro VALUES('$nombre','$clave','$edad','$sexo','$telefono')";
        $resultado=mysqli_query($conexion,$insertar) or die ("Error al insertar el registro");
        
        mysqli_close($conexion);
        echo "Conexion establecida";
        ?>
    </body>
</html>