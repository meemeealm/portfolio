let btn = document.querySelector('button');

function ripple(e) {

  // Setup
  let posX = this.offsetLeft;
	let posY = this.offsetTop;
	let buttonWidth = this.offsetWidth;
	let buttonHeight =  this.offsetHeight;
  
  // Add the element
	let ripple = document.createElement('span');
  
  this.appendChild(ripple);

  
 // Make it round!
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  
 
  ripple.style.width = `${buttonWidth}px`;
	ripple.style.height = `${buttonHeight}px`;
	ripple.style.top = `${y}px`;
	ripple.style.left = `${x}px`;
	
	ripple.classList.add('rippleAnimation');
	
	setTimeout(() => {
		this.removeChild(ripple);
	}, 1000);

}

btn.addEventListener('click', ripple);