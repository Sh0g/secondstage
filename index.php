<?php
use phpmailer\phpmailer\PHPMailer;
use phpmailer\phpmailer\Exception;
 
require '/home/rentersshield/vendor/phpmailer/phpmailer/src/Exception.php';
require '/home/rentersshield/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '/home/rentersshield/vendor/phpmailer/phpmailer/src/SMTP.php';

 
// Instantiation and passing [ICODE]true[/ICODE] enables exceptions
$mail = new PHPMailer(true);

 try {

    //Server settings

    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'example@domain.com';                     // SMTP username
    $mail->Password   = 'emailpass';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, [ICODE]ssl[/ICODE] also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

 
    //Recipients
    $mail->setFrom('example@domain.com', 'New Form submission on Rentersshield Website');
    $mail->addAddress('example@domain.com', 'JohnUser');     // Add a recipient
    $mail->addAddress('example@domain.com');               // Name is optional
    $mail->addReplyTo('example@domain.com', 'Information');
    $mail->addCC('example@domain.com');
    $mail->addBCC('example@domain.com');
 
$feedback_page = "feedback_form.html";
$error_page = "error_message.html";
$thankyou_page = "https://rentersshield.org/success/";    
 
    // Content
    $first_name = $_REQUEST['first_name'] ;
    
   
    
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 
    "First Name: " . $first_name . "\r\n" ;
 
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
     $mail->send();
    header( "Location: $thankyou_page" );
 } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

}
