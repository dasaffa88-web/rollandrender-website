<?php
$isbn = $_GET['isbn'] ?? '';
if (!$isbn) {
    http_response_code(400);
    exit('Missing ISBN');
}

$mid = '14158';
$id = '2925911';
$thaliaUrl = 'https://www.thalia.de/suche?searchString=' . urlencode($isbn);
$awinUrl = 'https://www.awin1.com/awclick.php?mid=' . $mid 
         . '&id=' . $id 
         . '&p=' . urlencode($thaliaUrl);

header('Location: ' . $awinUrl, true, 302);
exit;
