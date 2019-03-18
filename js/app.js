$(document).ready(function() {
	$('.video-hidden').hide();
	$('.photo-content_hidden').hide();
	$('.photo-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			// }
    },
    zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});



	  
	  $(".gallery_btn").click(function(){
		$(".photo-content_hidden").show("slow");
		$(".gallery_btn").hide("slow");
	});

	// $("#album-button_close").click(function(){
	// 		$(".album-list_hidden").hide("slow");
	// 	});

	$(".video-button").click(function(){
		$(".video-hidden").show("slow");
		$(".video-hidden").addClass("video_shown");
		$(".video-button").hide();
	});

	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		mainClass: 'my-mfp-zoom-in'
	});
});

// $(".video-button").click(function(){
// 	$(".video_shown").hide("slow");
// });
// const album_btn = document.getElementById("album-button"),
//       album_btn_close = document.getElementById("album-button_close"),
//       video_btn = document.getElementById("video-button"),
//       video_btn_close = document.getElementById("video-button_hidden");


// let album = document.getElementsByClassName("photo-contain");

// album_btn.addEventListener("click", ()=>{
//     for(i=3; i<=album.length-1;i++){
//         //album[i].classList.add("d-f"),
//         //album[i].classList.remove("d-none"),
//         album_btn.classList.remove("d-f"), 
//         album_btn.classList.add("d-none"),
//         album_btn_close.classList.remove("d-none"),
//         album_btn_close.classList.add("d-f");
//     }
//     });

// album_btn_close.addEventListener("click", ()=>{
//     for(i=3; i<=album.length-1;i++){
//         //album[i].classList.add("d-none"),
//         //album[i].classList.remove("d-f"),
//         album_btn_close.classList.remove("d-f"),
//         album_btn_close.classList.add("d-none"),
//         album_btn.classList.add("d-f"),
//         album_btn.classList.remove("d-none"); 
//     }
//     });

// video_btn.addEventListener("click", ()=>{
//         video_btn.classList.remove("d-f"), 
//         video_btn.classList.add("d-none"),
//         video_btn_close.classList.remove("d-none"),
//         video_btn_close.classList.add("d-f");
//     });

// video_btn_close.addEventListener("click", ()=>{
//         video_btn_close.classList.remove("d-f"),
//         video_btn_close.classList.add("d-none"),
//         video_btn.classList.add("d-f"),
//         video_btn.classList.remove("d-none"); 
//     });