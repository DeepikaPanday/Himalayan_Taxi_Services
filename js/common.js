$('.sld-bx-wrapper').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    speed: 1000,
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
   dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  // Accordian js 
         	//this is the button
	var acc = document.getElementsByClassName("faq-btn");
	var i;

	for (i = 0; i < acc.length; i++) {
		//when one of the buttons are clicked run this function
	  acc[i].onclick = function() {
		//variables
		var panel = this.nextElementSibling;
		var coursePanel = document.getElementsByClassName("faqAnswer");
		var courseAccordion = document.getElementsByClassName("faq-btn");
		var courseAccordionActive = document.getElementsByClassName("faq-btn active");

		/*if pannel is already open - minimize*/
		if (panel.style.maxHeight){
			//minifies current pannel if already open
			panel.style.maxHeight = null;
			//removes the 'active' class as toggle didnt work on browsers minus chrome
			this.classList.remove("active");
		} else { //pannel isnt open...
			//goes through the buttons and removes the 'active' css (+ and -)
			for (var ii = 0; ii < courseAccordionActive.length; ii++) {
				courseAccordionActive[ii].classList.remove("active");
			}
			//Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
			for (var iii = 0; iii < coursePanel.length; iii++) {
			  this.classList.remove("active");
			  coursePanel[iii].style.maxHeight = null;
			}
		  //opens the specified pannel
		  panel.style.maxHeight = panel.scrollHeight + "px";
		  //adds the 'active' addition to the css.
		  this.classList.add("active");
		} 
	  }//closing to the acc onclick function
	}//closing to the for loop.



  $('.c-slider-wrapper').slick({
    slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  infinite: true,
  cssEase: 'linear',
    pauseOnHover: true,
   dots: false,
   arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $('.r-tab').hide();
  $('.r-tab:first').show();
  $('.form-top-btn span:first').addClass('active');
  
  // Change tab class and display content
  $('.form-top-btn a').on('click', function(event){
    event.preventDefault();
    $('.form-top-btn span').removeClass('active');
    $(this).parent().addClass('active');
    $('.r-tab').hide();
    $($(this).attr('href')).show();
  });


    // back-scroll-top

    var btn = $('#scrollTop');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });



    function nav_open() {
      document.getElementById("responsiveNav").style.width = "90%";
    }
    
    function nav_close() {
      document.getElementById("responsiveNav").style.width = "0";
    }
    
    // Hide Menu when Click the Links
    
    var wd = screen.width;
    
    var awd = screen.availWidth;
    
    if(wd<768)
    
    {
    
        document.querySelectorAll("#click").forEach((link) => {
    
          link.addEventListener("click", () => {
    
            document.getElementById("responsiveNav").style.width = "0";
    
          });
    
        });
    
    }


    let modalBtns = [...document.querySelectorAll(".seedetails")];
    modalBtns.forEach(function (btn) {
      btn.onclick = function () {
        let modalform = btn.getAttribute("data-modal");
        document.getElementById(modalform).style.display = "flex";
      };
    });
    let closeBtns = [...document.querySelectorAll(".closePopup")];
    closeBtns.forEach(function (btn) {
      btn.onclick = function () {
        let modal = btn.closest(".modalform");
        modal.style.display = "none";
      };
    });
    window.onclick = function (event) {
      if (event.target.className === "modalform") {
        event.target.style.display = "none";
      }
    };


const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');

selectOption.addEventListener('click', function(){
selectBox.classList.toggle('active');
});

optionsList.forEach(function(optionsListSingle){
  optionsListSingle.addEventListener('click', function(){
 text = this.textContent;
 soValue.value = text;
 selectBox.classList.remove('active');
})
});

optionSearch.addEventListener('keyup', function(){
  var filter, li, i, textValue;
  filter = optionSearch.value.toUpperCase();
  li = options.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    liCount = li[i];
    textValue = liCount.textContent || liCount.innerText;
    if(textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    }else{
      li[i].style.display = 'none';
    }
  }
});



const destinationBox = document.querySelector('.destination-box');
const desoOption = document.querySelector('.des-option');
const desValue = document.querySelector('#desValue');
const optionSearchdes = document.querySelector('#optionSearchdes');
const dsoptions = document.querySelector('.dsoptions');
const dsoptionsList = document.querySelectorAll('.dsoptions li');

desoOption.addEventListener('click', function(){
  destinationBox.classList.toggle('active');
  });
  
  dsoptionsList.forEach(function(dsoptionsListSingle){
    dsoptionsListSingle.addEventListener('click', function(){
   text = this.textContent;
   desValue.value = text;
   destinationBox.classList.remove('active');
  })
  });
  
  optionSearchdes.addEventListener('keyup', function(){
    var filter, li, i, textValue;
    filter = optionSearchdes.value.toUpperCase();
    li = dsoptions.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      liCount = li[i];
      textValue = liCount.textContent || liCount.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      }else{
        li[i].style.display = 'none';
      }
    }
  });