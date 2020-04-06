 $(document).ready(function() {
   
   $("form#formOne").submit(function() {
        event.preventDefault();

     var nameInput = $("input#user").val();
     var coffee = $("select#coffee").val();
     

     if (coffee === 'americano') {
       $('#americano').slideToggle();
       $('#mocha').hide();
       $('#frapuccino').hide();
     } else if (coffee === 'mocha') {
        $('#americano').hide();
       $('#mocha').slideToggle();
       $('#frapuccino').hide();
     } else if (coffee === 'frapuccino') {
       $('#americano').hide();
       $('#mocha').hide();
       $('#frapuccino').slideToggle();
     } 
     
     $(".name").text(nameInput);


     
   })
  });
