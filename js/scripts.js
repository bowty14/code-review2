 $(document).ready(function() {
   $("form#question3").submit(function(event) {
     var iceCream = $("select#iceCream").val();
     var animal = $("select#animal").val();
     var coffee = $("select#coffee").val();

     if (coffee === 'americano' && animal === 'cat' && iceCream === 'chocolate') {
       $('#americano').show();
     } else if (coffee === 'mocha') {
        $('#mocha').show();
     } else if (coffee === 'frapuccino') {
       $('#frapuccino').show();
     }
     event.preventDefault();
   })
  });