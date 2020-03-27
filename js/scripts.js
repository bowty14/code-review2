 $(document).ready(function() {
   $("form#question1").submit(function(event) {
     var fun = $("select#fun").val();
     var color = $("select#color").val();
     var iceCream = $("select#iceCream").val();
     var answer = $("select#animal").val();
     var coffee = $("select#coffee").val();

     if (coffee === 'americano') {
       $('#americano').show();
     } else if (coffee === 'mocha') {
        $('#mocha').show();
     } else if (coffee === 'frapuccino') {
       $('#frapuccino').show();
     } 
     event.preventDefault();
   })
  });