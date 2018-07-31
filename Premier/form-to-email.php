<?php 
	ini_set('display_errors', 1);
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = "ali_musa@gmail.com";
	$email_subject = "New Form Submission";
	$email_body = "You have received a new message from user $name.\n".
	"Here is the message:\n 
	$message.";

	// echo $name"\n";
	// echo $visitor_email"\n";
	// echo $message"\n";

	// echo $email_from;
	// echo $email_subject;
	// echo $email_body;

	$to = "musali94@gmail.com";

	$headers = "From: $email_from \r\n" . "Reply-To: $visitor_email \r\n" . 'X-Mailer: PHP/' . phpversion();

	$mail = mail($to,$email_subject,$email_body,$headers);
	if($mail){
		echo "Thank you for using our mail form";
	}else{
		echo "Mail sending failed";
	}




 ?>