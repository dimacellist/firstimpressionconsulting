<?php
  header("Access-Control-Allow-Origin: *");
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST[email])) die();
  if($_POST) {

    //Set response 200: OK
    http_request_code(200);
    $subject = $_POST['name'];
    $to = "dyanovyanovsky@gmail.com";
    $from = $_POST['email'];

    //Data
    $message = $_POST['email'] . $_POST['message'];

    //Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "Message From: <" . $from . ">";
    mail($to, $subject, $message, $headers);

    //Echo json_encode($_POST)

    echo json_encode(array(
      "sent" => true
    ));
  } else {
    //Errors
    echo json_encode([
      "sent" => false, 
      "message" => "Something went wrong"
    ]);
  }
?>