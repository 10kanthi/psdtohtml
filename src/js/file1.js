// A $( document ).ready() block.
$( document ).ready(function() {
    // console.log( "ready!" );


 $("#togglemenu").click(function(){
        $(".sidenav__res").taddClass("sidenav__res-open");
        console.log("added");
    });

 $(".closebtn").click(function(){
        $(".sidenav__res").removeClass("sidenav__res-open");
        console.log("removed");
    });




