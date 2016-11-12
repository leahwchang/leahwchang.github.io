$(document).ready(function(){
  // add scrollspy to <body>
  $('body').scrollspy({target: "#navigation", offset: 50});
  // add smooth scrolling on all links inside the navbar
  $("#navigation a").on('click', function(event) {
    // make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // prevent default anchor click behavior
      event.preventDefault();
      // store hash
      var hash = this.hash;
      // using jQuery's animate() method to add smooth page scroll
      // the optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        // add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }

    // change text and link with scrolling on click
    var text = document.getElementById("nav-link");
    // if link text content is "projects"
    if (text.textContent === "projects") {
      // change text content to "about me"
      text.textContent = "about me";
      // change a link to "about me"
      $("a").attr("href", "#about");
    } else {
      // change text content to "projects"
      text.textContent = "projects";
      // change a link to "projects"
      $("a").attr("href", "#projects");
    }
  });

  $('.carouselFrame').slick({
    // dots: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: 0
    // appendDots: $("#naviDots")
  }) ;
});