<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $title = htmlspecialchars($_POST['title']);
    $date_time = htmlspecialchars($_POST['date_time']);
    $description = htmlspecialchars($_POST['description']);
    $location = htmlspecialchars($_POST['location']);
    $organizer_name = htmlspecialchars($_POST['organizer_name']);
    $email = htmlspecialchars($_POST['email']);
    $signup_link = htmlspecialchars($_POST['signup_link']);

    // Email details
    $to = "hcps-bejugame@gmail.com"; // Replace with your email address
    $subject = "New Volunteer Event Created: $title";
    $message = "
        <html>
        <head>
        <title>New Volunteer Event</title>
        </head>
        <body>
        <h2>$title</h2>
        <p><strong>Date and Time:</strong> $date_time</p>
        <p><strong>Description:</strong> $description</p>
        <p><strong>Location:</strong> $location</p>
        <p><strong>Organizer Name:</strong> $organizer_name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>SignUp Link:</strong> <a href='$signup_link'>$signup_link</a></p>
        </body>
        </html>
    ";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply@yourdomain.com" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Event created successfully. An email has been sent.";
    } else {
        echo "Failed to send the email.";
    }
}
?>
