$(document).ready(function() {
  $(".fa-search").click(function(){
    $("#panel").slideDown("slow");
    var close = '<i class="fa fa-times fa-3x" aria-hidden="true"></i>'
    $(".fa-search").hide("slow") ;
    $("#result").show() ;
    }) ;
$("#close").click(function(){
                  
     $("#panel").slideUp("slow");   
     $(".fa-search").show("slow") ;
     $("#result").hide() ;
     
                  });
 
     

  
  
  $('#search').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
     var search1="" ;
	if(keycode == '13'){
    $("#result").empty() ;
    
	search1 =$("input").val() ;

   $.getJSON("https://en.wikipedia.org/w/api.php?%20action=opensearch&format=json&origin=*&search="+search1,function(json){
     var searchResult ; 
     var headers=[] ;
     var infos=[];
     var links=[];
    
     for(var i=0 ; i<4 ; i++)
       {
         for(var j=0 ; j<json[i].length ;j++)
           {
             if (i==1)
                 headers[j]=json[i][j];
                
              
             if (i==2)
                infos[j]=json[i][j];
               
             if(i==3)
               links[j]=json[i][j];
           }
           
       }
     var x= headers.length ;
     var html="" ;
     for(i=0 ; i<x ; i++)
       {
         html +='<div style="background-color:#000000" ><a href="'+links[i]+'" target="_blank" ><h2>'+headers[i]+'</h2>'+'<p>'+infos[i]+'</p></a></div>' ;
       }
     
       $(html).appendTo("#result") ;
    $("#result").children().css({"padding":"2vw 0vw 2vw 2vw" ,"margin-top":"3vw"  });
      $("h2").mouseenter().css({"color":"#ffcc00"})
    
     console.log( x ,);
     
     
      
   });
  }
});
  
 
  
  });