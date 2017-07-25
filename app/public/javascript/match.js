var user = "";

    $.get("/api/").
    done(function (data) {
        console.log(data);
        var length = data.length;
        var newPea = data[length - 1];
        console.log(newPea);
        user = newPea.name;
        data.splice(length - 1, 1);
        var comp = [];
        for (i = 0; i < data.length; i++) {
            var match = 0;
            var dif = 0;
            for (key in newPea.questions) {
                if (newPea.questions[key] == data[i].questions[key]) {
                    match++;
                }
                else {
                    dif += Math.abs(parseInt(newPea.questions[key]) - parseInt(data[i].questions[key]));
                }
            }
            var result = { name: data[i].name, match: match, dif: dif };
            console.log(result);
            comp.push(result);
        }

        var best = [];
        match = 0, dif = 50;
        for (i = 0; i < comp.length; i++) {
            console.log(comp[i].name);
            if (comp[i].match >= match && comp[i].dif <= dif) {
                match = comp[i].match;
                dif = comp[i].dif;
                best.push(i);
            }
        }

        // $(".panel-body").html("<div ><strong> Matches: " + comp[best[0]].match + " Difference: " +
        //  comp[best[0]].dif +"</strong><form id='select-peas'></form></div>");
        for (i = 0; i < best.length; i++) {
            var b = best[i];
            $("#select-peas").append("<div><input name='match' type='checkbox' value='" + data[b].name + "'>" + i + ": " + data[b].name + "<img style='width:60px;' src='" + data[b].photo + "'</input></div>");
        }

    });  


$(document).on("click", "#add-pea", function (event) {
    var matches = {
        name: user,
        matches: []
    }

    $('input[name="match"]:checked')
    .each(function() {
      matches.matches.push($(this).val())
    });

    $.post("/api/add", matches)
        .done(function (data) {
            console.log(data)
            var addedStr = "added ";
            for(i=0; i<matches.matches.length; i++){
                addedStr+= matches.matches[i];

                if(i<matches.matches.length-1){
                    addedStr += ", "
                }
            }
            addedStr += " to your pod!";

            $(".panel-body").html(addedStr+
                '<div class="text-right"><a href="/profile/'+user+'"><button type="button" class="btn btn-md green-btn">'+
                '<span><img style="width:20px" src="images/pea2.png"></span> Profile</button></a></div>');
        })
})