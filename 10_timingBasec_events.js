// settimeout-the settimeout function is used to execute a function or code block after a specified delay in miliseconds.
// -------------------------------------------------------
// function delayedFunction(x){
//     console.log("This function was delayed by 2000 miliseconds (2sec)",x);
// }
// // delayedFunction();
// setTimeout(delayedFunction,2000);
// // this is how we can pass arguments 
// setTimeout(()=>delayedFunction(5),2000);

//========================================================================

// setInterval-the setInterval is used to repetadly excute a function or code block at  a specified interval in miliseconds 

// function intervalFunction(){
//     console.log("This function was interval by 2000 miliseconds (2sec)");
// }
// delayedFunction();
// setInterval(intervalFunction,2000);

// =============================================================================

// clearing Timeout with clearTimeout
// if you want to clear a sheduled timeout before it occurs , you can use the clearTimeout function

// the global clearTimeout( ) methodc  canclesa timeout previously established by calling setTimeout()

// sytax=clearTimeout(timeId);

function delayedFunction(){
    console.log("this function is delayed by 2 seconds");   
}
const mywork=setTimeout(delayedFunction, 2000);
clearTimeout(mywork);

// clearInterval
// syntax= clearInterval(intervalId);
