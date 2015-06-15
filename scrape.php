<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

	$url = "http://ojp.nationalrail.co.uk/service/ldb/liveTrainsJson?departing=true&liveTrainsFrom=" . $_GET['crs'] . "&liveTrainsTo=&serviceId=&f=";
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	//curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host: graph.facebook.com'));
	$output = curl_exec($ch);
	curl_close($ch);

	print_r($output);

	return $output;

?>