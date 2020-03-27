 $(document).ready(function() {
   
   $("form#formOne").submit(function() {
        event.preventDefault();

     var nameInput = $("input#user").val();
     var coffee = $("select#coffee").val();
     

     if (coffee === 'americano') {
       $('#americano').show();
     } else if (coffee === 'mocha') {
        $('#mocha').show();
     } else if (coffee === 'frapuccino') {
       $('#frapuccino').show();
     } 
     
     $(".name").append(nameInput);


     
   })
  });
