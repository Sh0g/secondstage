<?php


 // here we check if all fields are filled.
 $required = array('name', 'email', 'message');
 $error = false;
 foreach($required as $field) {
   if (empty($_REQUEST[$field])) {
     $error = true;
   }
 }

 //if something is not filled(empty) and error is true
 if ($error) {
   echo 'this is miss';
 }
 // if everything is filled then we execute the mail function
 else {

    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $company=$_REQUEST['company'];
    $message = $_REQUEST['message'];

    $fullmessage = "Name: ".$name."\n". "Company: ".$company."\n"."Message: \n".$message;

  // Set your email address where you want to receive emails.
   $to = 'agentlis001@gmail.com';
   $subject = 'Message';
   $send_email = mail($to,$subject,$fullmessage,$email);


   if ($send_email == false) {
     echo 'this is error';
   } else {
     echo 'this is success';
   }
   }
   ?>