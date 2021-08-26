
// const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll', scrollActive)

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav-bar a[href*='+ sectionId +']').classList.add('active')
//         }
//         else {
//             document.querySelector('.nav-bar a[href*='+ sectionId +']').classList.remove('active')
//         }
//     })
// }


// function scrollHeader() {
//     const nav = document.getElementById('header')
//     if(this.scrollY >= 80) nav.classList.add('scroll-header');
//     else nav.classList.remove('scroll-header')
// }
// window.addEventListener('scroll',scrollHeader)


function scrollHeader(){  
    const nav = document.getElementById('header-main')   
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')  
}  
window.addEventListener('scroll', scrollHeader)  




// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-50px";
//   }
// }

// $('.tabs').on('show.bs.tab', function (e) {    	
//     if (e.relatedTarget === undefined) {    
//       $($(e.target).attr('href')).slideDown('slow');
//     }
//     else {
//       $($(e.relatedTarget).attr('href')).slideUp({ duration: 'fast', queue: true,
//         done: function() {
//           $($(e.target).attr('href')).slideDown('slow');
//         }
//       });
//     }	
//   });


//     $(function () { 
//         var city_top = $('#education-row').offset().top;
//         $('.pt-trigger').click(function () {
//             $('html,body').animate({scrollTop:city_top},500);
//         })})
// function applyNavigation()
// {
// 	applyClickEvent();
// 	applyNavigationFixForPhone();
// 	applyScrollSpy();
// 	applyStickyNavigation();
// }
// function applyClickEvent()
// {
// 	$('a[href*=#]').on('click', function(e)
// 	{
// 		e.preventDefault();
		
// 		if( $( $.attr(this, 'href') ).length > 0 )
// 		{
// 			$('html, body').animate(
// 			{
// 				scrollTop: $( $.attr(this, 'href') ).offset().top
// 			}, 400);
// 		}
// 		return false;
// 	});
// }

// function applyNavigationFixForPhone()
// {
// 	$('.header-content li a').click(function(event) 
// 	{
// 		$('.navbar-collapse').removeClass('in').addClass('nav-bar');
// 	});
// }

// function applyScrollSpy()
// {
// 	$('#navbar-example').on('activate.bs.scrollspy', function() 
// 	{
// 		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
// 	});
// }

// window.onscroll=function(){
//     var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
//     console.log(topScroll);
//     var bignav  = document.getElementById("nav");//获取到导航栏id
//     if(topScroll > 200){  //当滚动距离大于250px时执行下面的东西
//     console.log(1111);
//         bignav.style.position = 'fixed';
//         bignav.style.top = '0';
//         bignav.style.zIndex = '9999';
//     }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
//         bignav.style.position = 'static';
//     }
// }

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

