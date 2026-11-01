document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title">Zac0511's website</div>
	        
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><a href="/page1">Page 1</a></li>
	            <li><a href="/page2">Page 2</a></li>
	            <li><a href="/page3">Page 3</a></li>
	            <li>
	                <strong>Submenu (hover to show)</strong>
	                <ul>
	                  <li><a href="/page-a">Page A</a></li>
	                  <li><a href="/page-b">Page B</a></li>
	                  <li><a href="/page-c">Page C</a></li>
	                  <li><a href="/page-d">Page D</a></li>
	                  <li><a href="/page-e">Page E</a></li>
	                </ul>
	            </li>
	          </ul>
	        </nav>
        	
        </div>
      </header>

	  
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">About me</div>
          <p>I'm a silly 15 years old omnisexual femboy :3</p>
          <p>I like computers, video games, gay stuff, and uh, other stuff but idk what else to write</p>
        </div>

        <div class="sidebar-section">
          <div class=sidebar-title">My local time</div>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">My button</div>
          <div class="site-button">
          	<a href="https://zac0511.com/" target="_blank"><img src="/button.png" alt="Zac0511"></a>
        	<textarea readonly><a href="https://zac0511.com/" target="_blank"><img src="https://zac0511.com/button.png" alt="Zac0511"></a></textarea>
          </div>
        </div>
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <center>
              <!-- Templates so i don't have to rewrite each time : -->
              <!-- Non-clickable : <img src="/buttons/" alt=""> -->
              <!-- Clickable : <a href="" target="_blank"><img src="/buttons/" alt=""></a> -->
              <!-- Actual buttons below : -->
              <img src="/buttons/pride.gif" alt="pride"> <img src="/buttons/coded_by_a_human.png" alt="coded by a human!"> <a href="https://www.cloudflare.com/" target="_blank"><img src="/buttons/hosted_on_cloudflare.png" alt="hosted on Cloudflare"></a> <a href="https://www.firefox.com/" target="_blank"><img src="/buttons/tested_on_firefox.gif" alt="tested on Firefox"></a> <img src="/buttons/petrapixel.gif" alt="petrapixel" href="https://petrapixel.neocities.org/">
            </center>
            <hr />
            <div>♡Copyheart 2026 by Zac0511. Feel free to copy and share :3<br>
            This website is open source : <a href="https://github.com/Zac0511/website">https://github.com/Zac0511/website</a></div>
            <hr />
            <div>Last update: 01/11/2026</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
