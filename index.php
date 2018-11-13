<?php
	include_once("index.html"); 
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = "ali_musa@gmail.com";
	$email_subject = "New Form Submission";
	$email_body = "You haave received a new message from user $name.\n".
	"Here is the message:\n 
	$message.";

	echo $name;
	echo $visitor_email;
	echo $message;

	echo $email_from;
	echo $email_subject;
	echo $email_body;

	$to = "ali_musa@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);





 ?>
