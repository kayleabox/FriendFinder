var user = "";

      $.get("/api/", function (data) {
        console.log(data);
      });

      $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        var newPea = {
          name: $("#name").val().trim(),
          email: $("#email").val().trim(),
          phone: $("#phone").val().trim(),
          photo: $("#photo").val().trim(),          
          questions: {
            cats: $('input[name="cats"]:checked').val(),
            unicorn: $('input[name="unicorn"]:checked').val(),
            dadjokes: $('input[name="dadjokes"]:checked').val(),
            rainbows: $('input[name="rainbows"]:checked').val(),
            got: $('input[name="got"]:checked').val(),
            chocolate: $('input[name="chocolate"]:checked').val(),
            vanilla: $('input[name="vanilla"]:checked').val(),
            glitter: $('input[name="glitter"]:checked').val(),
            vegetables: $('input[name="vegetables"]:checked').val(),
            eggs: $('input[name="eggs"]:checked').val(),
          }
        };

        console.log(newPea);
        user = newPea.name;

        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");

        $.post("/api/new", newPea)
        .done(function(data) {
          console.log(data);
          window.location = data.redirect;
      })  
    })
