<?php
$mail = 'julie.gissinger@gmail.com'; // Déclaration de l'adresse de destination.
$return = ""; 
if (isset($_POST['envoi']))
{
	/*
	 * cette fonction sert à nettoyer et enregistrer un texte
	 */
	function Rec($text)
	{
		$text = htmlspecialchars(trim($text), ENT_QUOTES);
		if (1 === get_magic_quotes_gpc())
		{
			$text = stripslashes($text);
		}
		$text = nl2br($text);
		return $text;
	};
	// formulaire envoyé, on récupère tous les champs.
	$nom     = (isset($_POST['nom']))     ? Rec($_POST['nom'])     : '';
	$email   = (isset($_POST['email']))   ? Rec($_POST['email'])   : '';
	$objet   = (isset($_POST['objet']))   ? Rec($_POST['objet'])   : '';
	$message1 = (isset($_POST['message'])) ? Rec($_POST['message']) : '';

	if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui rencontrent des bogues.
	{
    	$passage_ligne = "\r\n";
	}
	else
	{
    	$passage_ligne = "\n";
	}
  
	//=====Création de la boundary
	$boundary = "-----=".md5(rand());
	//==========
  
	//=====Définition du sujet.
	$sujet = $objet;
	//=========
  
	//=====Création du header de l'e-mail.
	$header = "From: \"".$nom."\"<".$email.">".$passage_ligne;
	$header.= "Reply-to: \"".$nom."\"<".$email.">".$passage_ligne;
	$header.= "MIME-Version: 1.0".$passage_ligne;
	$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
	//==========
  
	//=====Création du message.
	$message = $passage_ligne."--".$boundary.$passage_ligne;
	//=====Ajout du message au format texte.
	$message.= "Content-Type:text/html;charset=utf-8;".$passage_ligne;
	$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
	$message.= $passage_ligne."***Envoyé depuis le Portfolio :***<br /><br />".$message1.$passage_ligne;
	//=========
	$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
	$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
	//==========
	//=====Envoi de l'e-mail.
	if(mail($mail,$sujet,$message,$header))
	{
		header("location:http://juliegissinger.fr/ContactS.html");
	}
	else {
		header("location:http://juliegissinger.fr/ContactE.html");
	}
//==========
}
header("location:http://juliegissinger.fr/Contact.html");
?>