<?php
if(isset($_POST['submit'])){
    $to = "agentlis001@gmail.com";
    $from=trim($_POST['email']);
    $subject = "Test E-Mail";

    $message = htmlspecialchars($_POST['message']);
    $message = urldecode($message);
    $message = trim($message);


    // Always set content-type when sending HTML email
    $headers = "From: $from" . "\r\n";
    "Reply-to: $from" . "\r\n";
    "X-Mailer: PHP/" . phpversion();

    if (mail($to,$subject,$message,$headers)){
        echo ("E-mail was sent successfully!");
    }
    else{
        echo ("False!");
    }
       header('new_index.html?status=success');//redirect to your html with status
    }
?>