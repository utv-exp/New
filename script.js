
function currentTime()
{
	document.getElementById('h6').innerHTML = Date();
	setTimeout(currentTime, 1000)
}

