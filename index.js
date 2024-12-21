document.body.style.backgroundColor="blue";
const id=document.getElementById("header");
id.style.fontSize="100px";
id.style.color="white";
id.style.display="flex";
id.style.justifyContent="center";
const id1=document.getElementById("header1");
function timer(){
const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");
const date=date2-date1;
const days=Math.floor(date/(1000*60*60*24));
const hours=Math.floor((date/(1000*60*60))%24);
const minutes=Math.floor((date/(1000*60))%60);
const seconds=Math.floor((date/(1000))%60);
id1.innerHTML= `${days} Days   ${hours} Hours   ${minutes} Minutes   ${seconds} Seconds`;
}
id1.style.color="white";
id1.style.height="100vh"
id1.style.display="flex";
id1.style.justifyContent="center";
id1.style.fontSize="30px";
id1.style.height="100vh";
id1.style.marginTop="100px";
setInterval(timer,1000);