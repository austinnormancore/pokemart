$("#cart").on("click", function(){
  if($(".cart.show")[0]){
  $(".cart").removeClass("show");
  }
  else {
    $(".cart").addClass("show");
  }
  
});