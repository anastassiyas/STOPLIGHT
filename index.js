(function() {
    'use strict';
  
    // YOUR CODE HERE
    var stop = document.getElementById("stopButton")
    var slow = document.getElementById("slowButton")
    var go = document.getElementById("goButton")
  
    stop.addEventListener("click", function () {
        document.getElementById('stopLight').classList.toggle('stop')
        })
            
        slow.addEventListener("click", function () {
        document.getElementById('slowLight').classList.toggle('slow')
        })
           
        go.addEventListener("click", function () {
        document.getElementById('goLight').classList.toggle('go')
        })
      
        //Add new DOM event listeners and handlers to log the mouse state of each button.
        stop.addEventListener('mouseenter', e => {
        console.log("Entered stop button");
        });
      
        stop.addEventListener('mouseleave', e => {
        console.log("Left stop button");
        });
      
        slow.addEventListener('mouseenter', e => {
        console.log("Entered slow button");
        });
      
        slow.addEventListener('mouseleave', e => {
        console.log("Left slow button");
        });
      
        go.addEventListener('mouseenter', e => {
        console.log("Entered go button");
        });
      
        go.addEventListener('mouseleave', e => {
        console.log("Left go button");
        });
   
      }) ();
      
      
      