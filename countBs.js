function countBs(string,ch){

  var c=0;
    for(var i=0;i<string.length;i++)
      {
        if(string.charAt(i)==ch)
          c++;
      }

      console.log(c);
};

countBs("Bees","e");
