/*
filename: popup.js
author: hypov8
creat date: 13/11/2023

note: copied from my website
*/

/* 
======================================
	create global varables to elements
	that functions can access
======================================
*/
var v_modal = null, v_bgImage = null;

/* 
=====================================
	expand image on click
	if image ends in 'sm.' remove 'sm'
======================================	
*/
function fn_imageOnClick(srcElement)
{
	if (v_modal != null && v_bgImage != null)
	{
		let srcStr =  String(srcElement.src);

		if (srcStr && srcStr.length)
		{
			let sLen = srcStr.length - 3; //remove extension
			if (srcStr.endsWith('sm.',sLen)){
				srcStr = srcStr.replace('sm.', '.',);
			}		
			v_modal.style.display = "block";
			v_bgImage.src = srcStr;
		}
	}
}

/* 
=======================================
	add a popup element to end of body. 
=======================================
*/
window.onload = function(){
	// setup modal elements
	let v_body = document.getElementsByTagName("body")[0];

	if (v_body != undefined)
	{
		//append div to body
		v_modal = document.createElement('div');
		v_modal.classList.add("modal");
		v_modal.style.display = "none";
		v_body.append(v_modal);

		// add popup element
		let v_div = document.createElement('div');
		v_div.classList.add("modal-content");
		v_modal.appendChild(v_div);
		//image container
		v_bgImage = document.createElement('img');
		v_bgImage.classList.add("modal-image");
		v_div.appendChild(v_bgImage);	
		// onclick close
		v_modal.onclick = function() {v_modal.style.display = "none";}
		v_bgImage.onclick = function() {v_modal.style.display = "none";}	
	}
}
