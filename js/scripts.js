 $(document).ready(function() {
   $("form#question5").submit(function(event) {
     var coffee = $("select#coffee").val();

     if (coffee === 'americano') {
       $('#americano').show();
     } else if (coffee === 'mocha') {
        $('#mocha').show();
     }
     event.preventDefault();
   })
  });