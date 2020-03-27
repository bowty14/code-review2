 $(document).ready(function() {
   $("form#question1").submit(function(event) {
     var fun = $("select#fun").val();
     var color = $("select#color").val();
     var iceCream = $("select#iceCream").val();
     var animal = $("select#animal").val();
     var coffee = $("select#coffee").val();

     if (coffee === 'americano' && animal === 'cat' && iceCream === 'chocolate' && color === 'green' && fun === 'book') {
       $('#americano').show();
     } else if (coffee === 'mocha' && animal === 'dog' && iceCream === 'vanilla') {
        $('#mocha').show();
     } else if (coffee === 'frapuccino') {
       $('#frapuccino').show();
     }
     event.preventDefault();
   })
  });