// get every possible browser width
let windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

// get every possible browser height
let windowHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

let adjustiFrame = (wid)=>{
  document.getElementById("LDVid").width = wid;
  //document.getElementById("LDVid").height= hei;
  //need to optimize to get max width per viewport
  //get aspect ratio and calc height vs aspect height
};

// testing
// console.log(windowHeight);
// console.log(windowWidth);

adjustiFrame(windowWidth,windowHeight);