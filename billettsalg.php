<?php header('Access-Control-Allow-Origin: *'); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Billettsalg for norske klubber i sanntid. Finn ut hvor mange billetter din Eliteserieklubb har solgt. Oppdateres kontinuerlig." />
    <meta name="keywords" content="Billettsalg, Eliteserien, Ticketco, Obosligaen, sanntid, billetter, solgt, antall">
    <meta name="author" content="Johannes Kaste">
    <link rel="apple-touch-icon" sizes="180x180" href="media/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="media/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="media/faviconfavicon-16x16.png">
    <link rel="manifest" href="media/site.webmanifest">
    <link rel="mask-icon" href="media/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@fotcalc" />
    <meta name="twitter:creator" content="@fotcalc" />
    <meta name="twitter:image" content="https://s10.gifyu.com/images/ok_4xe31e765270758970.png" alt="fotcalc logo" />
    <meta property="og:title" content="Billettsalg i sanntid | Fotcalc" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.fotcalc.com/billettsalg" alt="fotcalc logo" />
    <meta property="og:image" content="https://s10.gifyu.com/images/ok_4x_generellfa6faeac0235e0c9.png" alt="fotcalc logo" />
    <meta property="og:image:alt" content="fotcalc logo" />
    <meta property="og:description" content="Billettsalg for norske klubber i sanntid. Finn ut hvor mange billetter din Eliteserieklubb har solgt. Oppdateres kontinuerlig." />
    <meta property="og:locale" content="nb_NO"/>
    <title id="title">Billettsalg i sanntid | Fotcalc</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="static/hentet_fra_nettet/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="static/hentet_fra_nettet/googleapis_font.css">
    <link rel="stylesheet" type="text/css" href="static/base.css">
    <link rel="stylesheet" type="text/css" href="static/billettsalg.css">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8377146818251154"
    crossorigin="anonymous"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-X432MQE0BZ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-X432MQE0BZ');
    </script>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <a class="nav-item nav-link" id="hjem" href="https://www.fotcalc.com">Home</a>
          <a class="nav-item nav-link" id="premiepenger_kalkulator" href="prize-money-calculator">Prize money calculator</a>
          <a class="nav-item nav-link" id="koeffisient_kalkulator" href="coefficient-calculator">Coefficient calculator</a>
          <a class="nav-item nav-link" id="landskoeff_rangering" href="country-coefficients">Country coefficient ranking</a>
          <a class="nav-item nav-link" id="klubbkoeff_rangering" href="club-coefficients">5-year ranking</a>
          <a class="nav-item nav-link" id="ti_års_rangering" href="10-year-ranking">10-year ranking</a>
          <a class="nav-item nav-link" id="billettsalg" href="billettsalg">Norwegian ticket sales (off topic)</a>
          <button type="button" class="btn btn-link" id="english" onclick="language(this.id)">English</button>
          <button type="button" class="btn btn-link" id="norsk" onclick="language(this.id)">Norsk</button>
        </div>
      </div>
    </nav>
    <div class="reaklame_sidene" id="ad_venstre">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8377146818251154"
        crossorigin="anonymous"></script>
      <!-- Anbefalt, kvadratisk -->
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8377146818251154"
        data-ad-slot="6582001165"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
    <div class="reaklame_sidene" id="ad_hoyre">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8377146818251154"
        crossorigin="anonymous"></script>
      <!-- Anbefalt, kvadratisk -->
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8377146818251154"
        data-ad-slot="6582001165"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
    <br><br><br>
    <div class="container">
      <h2 style="color:red;">Tekninsk feil. Sannsynligvis vil jeg ikke finne feilen før i morgen (07.10.2022)</h2><br>
      <div class="ytterst_tabell_div">
        <div id="knapper"></div>
        <br>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8377146818251154"
          crossorigin="anonymous"></script>
        <!-- Anbefalt, kvadratisk -->
        <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-8377146818251154"
          data-ad-slot="6582001165"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <br>
        <div id="innhold"></div>
        <script type="text/javascript" src="https://ticketco.events/no/nb/events/193640/seating_arrangement/sections/223502.json"></script>  
        <script type="text/javascript" src="billettsalg.js"></script>
      </div>
      <br>
      <br>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8377146818251154"
        crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-8377146818251154"
        data-ad-slot="8335804646"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
    <br>
    <footer>
      <div>
        <div class="laget_av">
          <h3 class="tekst_1" id="laget_av_Johannes">Developed by Johannes Kaste</h3>
          <br>
          <a class="logo_twitter" href="https://twitter.com/fotcalc" target="_blank">
            <img src="media/iconmonstr-twitter-1.svg" alt="twitter icon">
          </a>
          <br>
          <br>
          <br>
          <p class="tekst_1" id="kontakt_meg">Found potential for improvement, a bug or something wrong with the website?<br><br>You are welcome to contact me on <a id="mailto" href="mailto:johanneskaste@gmail.com?subject=Prize money calculator">johanneskaste@gmail.com</a></p>
        </div>
      </div>
    </footer>


    <script
      type="text/javascript" 
      src="static/variabler_index.js"
    ></script>
    <script
      type="text/javascript" 
      src="static/index.js"
    ></script>
    <script
      type="text/javascript" 
      src="static/hentet_fra_nettet/jquery-3.2.1.slim.min.js"
    ></script>
    <script
      type="text/javascript" 
      src="static/hentet_fra_nettet/bootstrap.min.js"
    ></script>
    <!--
    <script
    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"
    ></script>
    <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"
    ></script>
    <script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"
    ></script>
    --->
  </body>
</html>