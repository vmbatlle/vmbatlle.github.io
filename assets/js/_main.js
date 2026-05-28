/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
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
          $btnCopy.unbind("hover");
          tooltip.hide();
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
  
  $(".back-to-top").on("click", function(){
    window.scrollTo({ top: 0 });
  });

  $("#share-page").on("click", function( event ){
    event.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: location.href
      }).catch(console.error);
    } else {
      const element = document.getElementById("share");
      element.scrollIntoView();
    }
  });

  if(location.hash != null && location.hash != ""){
    $(location.hash + '.collapse').collapse('show');
  }

});


window.onload = function() {
  // Create a favicon with a circular mask
  var icons = document.querySelectorAll("link[rel~='icon']");
  var apple_touch_icons = document.querySelectorAll("link[rel~='apple-touch-icon']");
  var favicons = Array.from(icons).concat(Array.from(apple_touch_icons));
  if (favicons.length === 0) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
      favicons = [favicon];
  }

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  
  favicons.forEach(favicon => {
    var img = document.createElement('img');
    img.onload = () => {
      faviconSize = img.width;
      canvas.width = faviconSize;
      canvas.height = faviconSize;
      context.beginPath();
      context.arc( faviconSize / 2, faviconSize / 2, faviconSize / 2, 0, 2*Math.PI);
      context.closePath();
      context.clip();
      context.drawImage(img, 0, 0, faviconSize, faviconSize);
      favicon.href = canvas.toDataURL('image/png');
    };
    img.crossOrigin = 'Anonymous';
    img.src = favicon.href;
  });
};