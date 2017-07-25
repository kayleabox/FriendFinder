$.get("/api/")
.done(function (data) {
    console.log(data);
    if(data){
        for(i=0; i<data.length; i++){
            $("#show-peas").append("<div><img style='width:50px;' src='"+data[i].photo+"'><p>"+data[i].name+"</p></div>");
        }
    }
    else{
        $("#show-peas").append("<p>There are no peas!</p>");
    }
});