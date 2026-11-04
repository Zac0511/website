document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Import the time widget loader (the local time thingy in the sidebar)
  import("https://time.now/static/js/widget-loader.js")
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
	          </ul>
	        </nav>
        	
        </div>
      </header>

      <!-- For submenus : -->
      <!-- <strong>Submenu (hover to show)</strong> -->
	    <!--    <ul> -->
	    <!--      <li><a href="/page-a">Page A</a></li> -->
	    <!--        <li><a href="/page-b">Page B</a></li> -->
	    <!--        <li><a href="/page-c">Page C</a></li> -->
	    <!--        <li><a href="/page-d">Page D</a></li> -->
	    <!--        <li><a href="/page-e">Page E</a></li> -->
	    <!--      </ul> -->
	  
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">About me</div>
          <p>I'm a french silly 15 years old omnisexual femboy :3</p>
          <p>I like computers, video games, gay stuff, FOSS (Free and Open Source Software), and the ATmosphere :3</p>
        </div>

        <div class="sidebar-section">
          <center>
            <div class=sidebar-title">My local time</div>
            <a href="https://time.now/" class="time-now-widget" data-widget-type="digital" data-timezone="Europe/Paris" data-style="minimalist" data-width="150" data-title="France (Central European Time)" data-bgColor="#ffffff" data-textColor="#000000" data-show-seconds="true" data-show-date="true" data-format-12-hour="false">France (Central European Time)</a>
          </center>
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
              <img src="/buttons/pride.gif" alt="pride">
              <img src="/buttons/coded_by_a_human.png" alt="coded by a human!">
              <a href="https://www.cloudflare.com/" target="_blank"><img src="/buttons/hosted_on_cloudflare.png" alt="hosted on Cloudflare"></a>
              <a href="https://www.firefox.com/" target="_blank"><img src="/buttons/tested_on_firefox.gif" alt="tested on Firefox"></a>
              <img src="/buttons/made_on_linux.gif" alt="made on Linux">
              <img src="/buttons/boykisser.png" alt="boykisser">
              <img src="/buttons/no-ai.gif" alt="no AI allowed on the website!!">
              <a href="https://petrapixel.neocities.org/" target="_blank"><img src="/buttons/petrapixel.gif" alt="petrapixel"></a>
              <img src="/buttons/anything_but_chrome.gif" alt="anything but chrome...">
              <a href="javascript:alert('were on the internet susie')"><img src="/buttons/kris_where_tf_are_we.png" alt="kris where tf are we"></a>
              <img src="/buttons/internet_privacy_now.gif" alt="internet privacy, NOW!">
              <img src="/buttons/yall-means-all.gif" alt="y'all means all">
              <img src="/buttons/stop_microslop.gif" alt="stop Microslop!">
              <a href="https://neocities.org/" target="_blank"><img src="/buttons/neocities.gif" alt="NeoCities: the web is yours"></a>
              <a href="https://www.chaz.sk" target="_blank"><img src="/buttons/chaz.png" alt="chaz"></a>
              <img src="/buttons/queercoded.png" alt="you're telling me a queer coded this">
              <a href="https://grapheneos.org/" target="_blank"><img src="/buttons/grapheneOS.png" alt="GrapheneOS"></a>
              <a href="https://planetclue.com/" target="_blank"><img src="/buttons/planet-clue.gif" alt="planet clue"></a>
              <a href="https://www.minecraft.net" target="_blank"><img src="/buttons/minecraft.gif" alt="Minecraft"></a>
              <a href="https://petrapixel.neocities.org/indiewebdb/" target="_blank"><img src="/buttons/indiewebdb.png" alt="indie web database"></a>
            </center>
            <hr />
            <div>♡Copyheart 2026 by Zac0511. Feel free to copy and share :3<br>
            This website is open source : <a href="https://github.com/Zac0511/website">https://github.com/Zac0511/website</a></div>
            <hr />
            <div>Last update: 03/11/2026 18:58 CET</div>
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
