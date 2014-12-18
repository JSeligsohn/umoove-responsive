<?
  $name = $_REQUEST['name'] ;
  $phone = $_REQUEST['phone'] ;
  $company = $_REQUEST['company'] ;
  $website = $_REQUEST['website'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;
  $to = "avizuber+skytemplateform@gmail.com";
if (isset($email) && isset($name) && isset($message)){
  $subject = "$name from $company has sent you a message via your website.";
   			// PREPARE THE BODY OF THE MESSAGE
   			$message = "<html><body><div><p>$message</p></div><div><p>$name</p></div><div><p>$company</p></div><div><p>$website</p></div><div><p>$phone</p></div><div><p>$email</p></div></body><html>";
			$headers = "From: " . $name . "\r\n";
			$headers .= "Reply-To: ". $email . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  mail($to, $subject, $message, $headers);
 echo "success";
}
?>