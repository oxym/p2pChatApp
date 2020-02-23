let socket;

$(function () {
	socket = io();

	socket.emit('FromBrowser_ImYourBrowser', "my username");

	socket.on('FromServerToBrowser_Message', function(msg){
		console.log("server sent message:");
		console.log(msg);
	});

	$('form').submit(function(e){
	  e.preventDefault(); // prevents page reloading
	  socket.emit('FromBrowser_Message', $('#m').val());
	  $('#m').val('');
	  return false;
	});
});