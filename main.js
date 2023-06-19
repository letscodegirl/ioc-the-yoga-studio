console.log('the script is working')

// First we define our js variables 
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
// then we start righting our new function
function toggleBurgerMenu() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (burgerButton.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    burgerButton.classList.remove("active")
    // gsap to close the email
    gsap.to(burgerMenu, {
    // width to shrink it
        width: 0,
     //padding to minimilistic so it wont overflow
        padding: '2px 0',
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    burgerButton.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(burgerMenu, {
        width: "auto",
        height: "auto",
        opacity: 1,
        padding: '2px 1.5rem'
    })
  }
}

// finally link it to the click action of the burger button
burgerButton.addEventListener('click', toggleBurgerMenu)
