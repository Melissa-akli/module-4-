

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 function speak (name){
     if (name[0]=="J" || name[0]=="j") {
         console.log( "Goodbye "+ name);
         }
         else {
             console.log( "Hello "+name)
         };
 };

 var i =0;
 for( i=0; i<names.length ; i++){
     speak (names[i]);
 }
