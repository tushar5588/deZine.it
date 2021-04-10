<?php
$name = $_POST['name'];
$visitor_email = $_POST['email']
$message= $_POST['message']
$email_from='tusharmunnu@gmail.com';
$email_subject="New Form Submission";
$email_body="User Name: $name.\n".
            "User email:$visitor_email.\n".
            "User Messages:$message.\n";
$to ="tusharmunnu@gmail.com";
$headers = "Form: $enail_form \r\n";
$headers = "Reply-to: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: contactform.html");
?>
