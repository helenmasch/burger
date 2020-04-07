$(".create-form").on("submit", function(){
    var newBurger = {
        burger_name: $("#burger").val()
    }
    $.post("/api/burgers",newBurger).then(function(){
        location.reload()
    })
})

$(".devoured").on("click", function(){
    var id = $(this).attr("data-id")
    $.ajax({
        url:"/api/burgers/" + id ,
        method:"PUT"
    }).then(function(){
        location.reload()
    })
})