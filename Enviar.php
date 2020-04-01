
<?php

         use PHPMailer\PHPMailer\PHPMailer;
         use PHPMailer\PHPMailer\Exception;
        
        require 'phpmailer/Exception.php';
        require 'phpmailer/PHPmailer.php';
        require 'phpmailer/SMTP.php';


        //variables para los campos de texto 
        $nombre= $_POST["nombre"]; 
        $email=$_POST["correo"]; 
        $telefono=$_POST["telefono"]; 
        $mensaje= $_POST["comentario"]; 

         //var_dump($_POST);

            $correo= "nombre".$nombre ."Correo:".$email ."Telefono:".$telefono ."Mensaje:".$mensaje;
            
            $mail = new PHPMailer;  
            
                     //configuracion de servidor 
            $mail->SMTPDebug = 0;                                 // Observar Errores 
            $mail->isSMTP();                                      // Protocolo para enviar 
            $mail->Host = 'smtp.gmail.com';                       // servicio de correo  que se va utilizar 
            $mail->SMTPAuth = true;                               // 
            $mail->Username = 'newPrintConsultas@gmail.com';          // correo desde donde se va enviar el correo 
            $mail->Password = 'PrintNew.2019';                      // contraseña 
            $mail->SMTPSecure = 'tls';                            // 
            $mail->Port = 587;                                    // 
            //Recipients
            $mail->setFrom('newPrintConsultas@gmail.com',$nombre);  // desde donde se va enviar 
            $mail->addAddress('newPrintConsultas@gmail.com');        // a quien se le va enviar el correo 
            //Contenido para  Permitir hacer HTML
            $mail->isHTML(true);                                  
            $mail->Subject = 'Asunto muy importante';
            $mail->Body=  " 
            <html xmlns='http://www.w3.org/1999/xhtml'>
            <head>
                <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
                <title>CORREO CONECTADO</title>
               
                <body style='margin: 0; padding: 0;'>
                        <table width='100%' bgcolor='#ffffff' style='border:1px solid #05BAC9; color: #05BAC9; border-collapse: collapse; padding:15px 10px 20px 10px; margin: 5px 0;'>
                <tr>
                            <table align='left' border='0' cellpadding='0' cellspacing='0' width='100%'>
							            <tbody>
								            <tr>
								            	    <td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;  color:#FFFFFF; font-family:Arial, Helvetica, sans-serif;font-weight:normal; font-size:14px;'>Nombre:<strong> $nombre</strong><td>
                                                     </td>
                                                    <td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;color:#FFFFFF; font-family:Arial, Helvetica, sans-serif;font-weight:normal; font-size:14px;'>Telefono:<strong> $telefono</strong><td>
                                                    </td>
                                                    <td align='left' valign='top' bgcolor='d1ae85' style='padding:18px 20px 10px 20px;color:#FFFFFF; font-family:Arial, Helvetica, sans-serif;font-weight:normal; font-size:14px;'>Correo:<strong> $email</strong><td>
                                                    </td>
							                </tr>
							            </tr>
							            </tbody>
                            </table>
                            
                            <table aling='center' border='0' cellpadding= '0' style='border:1px solid #05BAC9; cellspacing ='0' height='176' width='100%' padding:'20px'>
                                <tbody>
                                    <tr>
                                        <td bgcolor='d1ae85' style='display:block; padding-bottom:15px; font-size:12px; font-family:Helvetica, Arial, sans-serif; color:#777777;' border: 'solid 1px'; valign='top'>
                                            <div style='text-align: justify; padding:20px; color:#fff;'>
                                                    $mensaje
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                </tr>
            </table>
        </body>   
    </head>
<html>";
            $exito = $mail->Send();
            if($exito) {
                echo "Correo enviado!";
                } else {
                echo "Hubo un problema, contacta a un administrador";
                } 
?>