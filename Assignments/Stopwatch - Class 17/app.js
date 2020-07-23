
var count = 0;
var interval;

function interval(){
    count++;
    console.log("Set Interval running..."+ count)
}

interval = setInterval(interval, 1000);

//// to stop setInterval function 
setTimeout(function(){
 clearInterval(interval);
}, 5000)

// function timeOut(){
//     console.log("setTimeOut running...")
// }

// setTimeout(timeOut, 3000)


