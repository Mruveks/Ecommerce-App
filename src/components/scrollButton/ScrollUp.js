import React from 'react'
import "./scrollUp.css"

const ScrollUp = () => {

    const mybutton = document.getElementById("myBtn");
    window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    return (
        <button onClick={topFunction} id="myBtn" title="Go to top">Top</button>
    )
}

export default ScrollUp
