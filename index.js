var secondul = document.querySelectorAll('.secondul');
var secondli = document.querySelectorAll('.secondli');
var titleCont = document.querySelectorAll('.titleCont');
var testul = document.querySelectorAll('.testul');
var testli = document.querySelectorAll('.testli');
for(var i = 0, len = titleCont.length; i < len; i ++) {
	titleCont[i].addEventListener('mouseover', (function(i) {
		return function() {
			secondul[i].style.display = "block";
			titleCont[i].style.borderBottom = "2px solid #fade73";
			titleCont[i].style.height = "39px";
		}
	}(i)))
}
for(var i = 0, len = titleCont.length; i < len; i ++) {
	titleCont[i].addEventListener('mouseout', function(i) {
		return function() {
			secondul[i].style.display = "none";
			titleCont[i].style.borderBottom = "none";
			titleCont[i].style.height = "39px";
			titleCont[i].style.backgroundColor = "#0085fb";
		}
	}(i))
}
for(var i = 0, len = secondli.length; i < len; i ++) {
	secondli[i].addEventListener('mouseover', function(i) {
		return function() {
			testul[i].style.display = "block";
			secondli[i].style.backgroundColor = "red";
		}
	}(i))
}
for(var i = 0, len = secondli.length; i < len; i ++) {
	secondli[i].addEventListener('mouseout', function(i) {
		return function() {
			testul[i].style.display = "none";
			secondli[i].style.backgroundColor = "#0085fb";
		}
	}(i))
}




slider(document.querySelector('#slider1'), document.querySelector('#controlSlider1').children);
slider(document.querySelector('#slider2'), document.querySelector('#controlSlider2').children);
function slider (bgul, controlli) {
	var bgarr = new Array('images/bg0.gif', 'images/bg1.gif', 'images/bg2.gif', 'images/bg3.gif');
	var bgli = bgul.children;
	for(var i = 0,len = bgli.length; i < len; i ++) {
		var src = bgarr[i];
		bgli[i].style.backgroundImage = 'url(' + src + ')';
	}


	var num = 0;
	var time = setInterval(function () {
		turnpic(bgul, controlli)
	},4000);
	function turnpic(containerimg, containercircle) {
		var len = containercircle.length;
		if(num != len - 1) {
			num ++;
			containerimg.style.marginLeft = - num + '00%';
			colorfn(containercircle, num);
		} else {
			containerimg.style.marginLeft = 0;
			colorinit(containercircle);
		}
	}
	function colorfn(containercircle, num) {
		if (containercircle.length == 4) {
			if(num != containercircle.length) {
				containercircle[num].style.backgroundColor = "#00a1d6";
				for(var i = 0;i < len;i ++){
		          if (i != num) {              
		               containercircle[i].style.backgroundColor = "red";
		          }
		        } 
			}
			
		}
		else if(containercircle.length == 3) {
			containercircle[num].style.backgroundColor = "red";
		}
	}
	function colorinit(containercircle) {
		containercircle[0].style.backgroundColor = "#00a1d6";
		containercircle[num].style.backgroundColor = "red";
		num = 0;
	}

	for(var i = 0, len = controlli.length;i < len; i ++) {
		controlli[i].addEventListener('click', function(i) {
			return function() {
				bgul.style.marginLeft = -i + "00%";	
				num = i;
				colorfn(controlli,num);
				clearInterval(time);
				time = setInterval(function () {
					turnpic(bgul, controlli)
				},4000);
			}
		}(i))
	}
}