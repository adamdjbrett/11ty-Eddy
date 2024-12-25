  var url = window.location.href;
      if (url.lastIndexOf("?q=") > 0) {
        // get the index of the parameter, add three (to account for length)
        var stringloc = url.lastIndexOf("?q=") + 3;
        // get the substring (query) and decode
        var searchquery = decodeURIComponent(url.substr(stringloc));
        // regex matches at beginning of line, end of line or word boundary, useful for poetry
        var regex = new RegExp("(?:^|\\b)(" + searchquery + ")(?:$|\\b)", "gim");
        // get, add mark and then set content
        var content = document.getElementById("main").innerHTML;
        document.getElementById("main").innerHTML = content.replace(regex, "<mark>$1</mark>");
      }

      // Support sidebar toggle
      (function(document) {
        var toggle = document.querySelector('.sidebar-toggle');
        var sidebar = document.querySelector('#sidebar');
        var sidebarNavLink = document.querySelector('.sidebar-nav-item');
        var checkbox = document.querySelector('#sidebar-checkbox');

        // Toggle sidebar
        toggle.addEventListener('click', function(e) {
          e.preventDefault();

          checkbox.checked = !checkbox.checked;
          toggle.setAttribute('aria-expanded', checkbox.checked);
          sidebar.setAttribute('aria-hidden', !checkbox.checked);
        });

        // Make sure we focus on the menu once it opens to aid tab navigation
        sidebar.addEventListener('transitionend', function() {sidebarNavLink.focus()});

        // Clicking anywhere in the sidebar should close the menu
        sidebar.addEventListener('click', function(e) {
          checkbox.checked = false;
          toggle.setAttribute('aria-expanded', false);
          sidebar.setAttribute('aria-hidden', true);
        })

      })(document);
