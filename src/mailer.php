<?php
    
    //Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" ", " "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    //Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "dyanovyanovsky@gmail.com";

    //Set email subject.
    $subject = "New message from $name";

    //Build email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message: \n$message\n";

    //Build the email headers.
    $email_headers = "From: $name <$email>";

    //Send the email.
    mail($recipient, $subject, $email, $email_content, $email_headers);

    //Redirect to the index.php page with success code.
    header("Location: http://176.32.230.44/firstimpressiontest.com/index.php?success=1#form");

?>