
<?php
$data = json_encode($_REQUEST);
$myfile = fopen("enquiries.txt", "a") or die("Unable to open file!");
$txt = "user id date";
fwrite($myfile, "\n". $data);
fclose($myfile);
