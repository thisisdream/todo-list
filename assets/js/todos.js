// Check off Specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// click to remove todo
$("ul").on("click", ".delete", function(event){
   $(this).parent().fadeOut(500,function(){
       $(this).remove(); 
   });
    event.stopPropagation();
});

//Add new todo
$("input[type='text']").keypress(function(event){ 
    if(event.which === 13){
        //grab new todo from input and clear form
      var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append('<li><span class="delete"><i class="fa fa-trash" aria-hidden="true"></i></span>' + todoText + '</li>');
        
    };
});

$("#new").on("click",function(){
    $("input[type='text']").fadeToggle();
});
