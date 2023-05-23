var show = document.getElementById("nav-links");
function showMenu(){
    show.style.right = "0";
}
function closeMenu(){
    show.style.right = "-200px";
}
document.getElementById('conatctme').addEventListener('submit', function(contacme) {
    contacme.preventDefault(); // Mencegah pengiriman secara langsung
  
    var name = document.getElementById('name').value;
    var gmail = document.getElementById('gmail').value;
    var message = document.getElementById('message').value;
  
    // Kirim data variabel ke melalui Email
    var mailToLink = 'mailto:danielfutakata@gmail.com' +
                     '?subject=' + encodeURIComponent('Contact Us Form Submission') +
                     '&body=' + encodeURIComponent('Name: ' + name + '\n\nGmail: ' + gmail + '\n\nMessage: ' + message);
    window.location.href = mailToLink;
  });