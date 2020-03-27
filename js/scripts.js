 $(document).ready(function() {
   $("form#question1").submit(function(event) {
     var fun = $("select#fun").val();
     var color = $("select#color").val();
     var iceCream = $("select#iceCream").val();
     var animal = $("select#animal").val();
     var coffee = $("select#coffee").val();

     if (coffee === 'americano' && animal === 'cat' && iceCream === 'chocolate' && color === 'green' && fun === 'book') {
       $('#americano').show();
     } else if (coffee === 'americano' && animal === 'dog' && iceCream === 'vanilla' && color === 'red' && fun === 'movie') {
       $('#americano').show();
     } else if (coffee === 'mocha' && animal === 'dog' && iceCream === 'vanilla' && color === 'red' && fun === 'movie') {
        $('#mocha').show();
     } else if (coffee === 'frapuccino' && animal === 'bird' && iceCream === 'strawberry' && color === 'blue' && fun === 'hike') {
       $('#frapuccino').show();
     } 
     event.preventDefault();
   })
  });