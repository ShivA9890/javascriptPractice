const randomcolor = function(){
    hexno = '0123456789ABCDEF';
    color = '#';
    for(let i=0;i<6;i++){
      color += hexno[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let intervalid
  const startchangecolor = function(){
    if(!intervalid){
      intervalid = setInterval(changecolor,1000);
     }
      function changecolor(){
        document.body.style.backgroundColor = randomcolor();
      }
  
  }
  const stopchangecolor = function(){
    clearInterval(intervalid);
    intervalid = null;
  
  }
  document.querySelector("#start").addEventListener("click",startchangecolor);
  document.querySelector("#stop").addEventListener("click",stopchangecolor);