$(document).ready(function() {
    $('.myform').on('submit',function(){

    $('.output_message').text('Loading...'); 

    var form = $(this);
         $.ajax({
         url: "sendmail.php",
         method: form.attr('method'),
         data: form.serialize(),
         success: function(result){

     let d = result.split(" ");
     let y = d.slice(-1)[0];

     if (y == 'success'){
         $('.output_message').text('Message Sent!');  
     } 
     else if (y == 'miss'){
          $('.output_message').text('Please fill in all the fields above.');
     }
     else {
         $('.output_message').text('Error Sending email!');
     }
 }
});
return false;   
});
});