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
        //   $.get("/api/").done(function(data){
        //     var length = data.length;
        //     data.splice(length-1,1);
        //     console.log(data);
        //     var comp = [];
        //     for(i=0; i<length-1; i++){
        //       var match = 0;
        //       var dif = 0;
        //       for(key in newPea.questions){
        //         if(newPea.questions[key] == data[i].questions[key]){
        //           match++;
        //         }
        //         else{
        //           dif += Math.abs(parseInt(newPea.questions[key])- parseInt(data[i].questions[key]));
        //         }
        //       }
        //       result = {name:data[i].name, match: match, dif: dif};
        //       comp.push(result);
        //     }

        //     var best = [];
        //     match = 0, dif = 50;
        //     for(i = 0; i < comp.length; i++){
        //       if(comp[i].match >= match && comp[i].dif <= dif){
        //         match = comp[i].match;
        //         dif = comp[i].dif;
        //         best.push(i);
        //       }
        //     }

        //     $(".panel-heading").html("Your new Peas!");
        //     $(".panel-body").html("<div ><strong> Matches: " + comp[best[0]].match + " Difference: " +
        //      comp[best[0]].dif +"</strong><form id='select-peas'></form></div>");
        //     for(i=0; i<best.length; i++){
        //       var b = best[i];
        //       $("#select-peas").append("<div><input name='match' type='checkbox' value='"+data[b].name+"'>"+ i +": "+ data[b].name+"</input></div>");
        //     }
        //     $("#select-peas").append('<div class="text-right"><button type="submit" class="btn btn-md green-btn" id="add-pea">'+
        //       '<span class="glyphicon glyphicon-heart"></span> Add Peas</button></div>');

        // });  
      })  
    })
/*
    $(document).on("click", "#add-pea", function(event){
        var matches = {name:user, 
          matches : $('input[name="match"]:checked').val()
        }
        $.post("/api/add", matches)
        .done(function(data) {
          console.log("added "+ matches.matches + " to your pod!");

        })
    })
    */