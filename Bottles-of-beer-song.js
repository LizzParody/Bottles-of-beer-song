var count = 99;
var song= " bottles of beer";

  while(count > 0){
    console.log(count + song + " on the wall");
    console.log(count + song);
    console.log("take one down, pass it around");
    count -=1;
  if(count > 0){
    console.log(count + song + "on the wall" );
  } else {
    console.log("go to the store and buy some more");
  }
}
