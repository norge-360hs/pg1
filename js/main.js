function sayHello(){
    //document.getElementById('message').innerHTML = 'Welcome '+document.getElementById('username').value+'.';
    $('#message').html('Welcome '+$('#username').val()+'.');
}