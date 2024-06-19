/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    const MINIMUM_WIDTH = 1024;

    // Adjust if the follow button is shown based upon screen size
    var width = $(window).width();
    var show = $(".author__urls-wrapper button").length === 0 ? width > MINIMUM_WIDTH : !$(".author__urls-wrapper button").is(":visible");

    // Don't show the follow button if there is no content for it
    var count = $('.author__urls.social-icons li').length - $('li[class="author__desktop"]').length;
    if (width <= MINIMUM_WIDTH && count === 0) {
      $(".author__urls-wrapper button").hide();
      show = false;
    }

    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $(".highlighter-rouge").each(function(){
    var $code = $(this).children("div").children("pre").children("code").text();

    var $toolbar = null;
    if ($(this).parent().is(":not([copy-to-clipboard='false'])")) {
      if ($toolbar === null) {
        $toolbar = $('<div class="highlight-toolbar"></div>');
        $(this).prepend($toolbar);
      }
      var $btnCopy = $('<span class="copy-to-clipboard"></span>')
      $toolbar.prepend($btnCopy);
      const tooltip = new bootstrap.Tooltip($btnCopy, {
          title: "Copy to clipboard",
          placement: "top",
          trigger: "hover"
        })
      $btnCopy.on("click", function(){  
        navigator.clipboard.writeText($code);
        tooltip.setContent({ '.tooltip-inner': 'Copied' });
        $btnCopy.addClass("copied");
        window.setTimeout(function(){
          tooltip.setContent({ '.tooltip-inner': 'Copy to clipboard' });
          $btnCopy.removeClass("copied");
        }, 2000);
      });
    };

    if ($(this).parent().is("[download]")) {
      var filename = $(this).parent().attr("download");
      if ($toolbar === null) {
        $toolbar = $('<div class="highlight-toolbar"></div>');
        $(this).prepend($toolbar);
      }
      var $btnDownload = $('<a class="download" href="data:text/plain;charset=utf-8,' + encodeURIComponent($code) + '" download="' + filename + '"></a>');
      $toolbar.prepend($btnDownload);
      new bootstrap.Tooltip($btnDownload, {
        title: "Download",
        placement: "top",
        trigger: "hover"
      })
    };
  });

  $("#share-page").on("click", function( event ){
    if (navigator.share) {
      event.preventDefault();
      navigator.share({
        title: document.title,
        url: location.href
      }).catch(console.error);
    }
  });

  if(location.hash != null && location.hash != ""){
    $(location.hash + '.collapse').collapse('show');
  }

});
