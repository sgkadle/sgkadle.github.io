// Check off specific todod list by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on x to delete todod
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(500 ,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa-trash'></i></span> "+ todoText +"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

