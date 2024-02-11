import './style.css'

document.querySelector('#app').innerHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css">
    <title>Mi Proyecto con Etiquetas Semánticas Extendido</title>
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>

  <!-- Cabecera de la página 
    Implementacion etiquetas 
      -header
      -nav
      -ul
    -->
    <header class="header">
        <h1 class="header-h1">Globitoo</h1>
        <nav>
            <ul class="header-ul">
                <li><a class="header-a" href="#main">Home</a></li>
                <li><a class="header-a" href="#about">About</a></li>
                <li><a class="header-a" href="#media">Half</a></li>
                <li><a class="header-a" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenido principal de la página
      implementación etiquetas
        -main
        -section
        -article
        -figure
    -->
    <main id="main" class="main">
      <section class="container">
        <article class="article">
            <header>
                <h2 class="article-h2">Globitoo done <br> right</h2>
            </header>
            <figure>
              <img class="article-img" src="./public/img/background.svg" alt="Mujer con flores">
            </figure>
        </article>

        <!-- Secciones de contenido
          Implementacion etiquetas
            -section
            -ul, li
            -a
            -span
        -->
        <section id="about" class="about">
           <ul class="about-ul">
            <li class="about-li">
              <i class="bi bi-brush"></i>
              <a href="#" class="about-a">
                <h5 class="about-h5">Color</h5>
                <span class="about-span">Green</span>
              </a>
            </li>
            <li class="about-li">
              <i class="bi bi-calendar4"></i>
              <a href="#" class="about-a">
                <h5 class="about-h5">Date</h5>
                <span class="about-span">08/02/2024</span>
              </a>
            </li>
            <li class="about-li">
              <i class="bi bi-clock"></i>
              <a href="#" class="about-a">
                <h5 class="about-h5">Hour</h5>
                <span class="about-span">8:20 am</span>
              </a>
            </li>
           </ul>
        </section>
        
      </section>

        <!-- Sección de tabla 
          Implementacion etiquetas
            -table
            -thead
            -tr,th
            -tbody,
            -cite    
        -->
        <section class="table-container">
            <h2 class="table-h2">Control of globitoos records</h2>
            <table class="table-table">
                <thead class="table-thead">
                    <tr>
                        <th>Color</th>
                        <th>Date</th>
                        <th>Hour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Yellow</td>
                        <td>08/02/2024</td>
                        <td>8:20am</td>
                    </tr>
                    <tr>
                        <td>Blue</td>
                        <td>05/02/2024</td>
                        <td>5:40 pm</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="container-cite">
          <cite class="cite-cite">
            <span class="cite-cuotes">" </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis nemo facilis, assumenda laudantium necessitatibus sed quibusdam molestias amet, numquam aliquam libero! Obcaecati.<span class="cite-cuotes"> "</span>
          </cite>
            <img class="cita-img" src="https://img.freepik.com/free-photo/business-man-banner-concept-with-copy-space_23-2149601471.jpg" alt="Men site">
        </section>
    </main>

    <!-- Pie de página 
      Implementacion etiquetas
        -footer
        -nav
        -video
        -source
        -address
    -->
    <footer class="footer">
      <section id="contact" class="footer-section">
        <h2 class="footer-h2">Contact</h2>
        <div class="footer-div">
          <address class="footer-address">
            <i class="bi bi-github"></i>
            GitHub: <a href="Alejandro-RECO">revolledocoronado@gmail.com</a>
          </address>
          <address class="footer-address">
            <i class="bi bi-envelope-fill"></i>
            Gmail: <a href="luis.revolledo@globant.com ">luis.revolledo@globant.com</a>
          </address>
        </div>
      </section>
      <section class="footer-section-co">
        <p>&copy; 2024 Globitoo | luis.revolledo@globant.com</p>
        <ul class="footer-ul">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of use</a></li>
      </ul>
      </section>
      <nav class="footer-nav">
        <section id="media" class="footer-section-media">
          <h2 class="media-h2">Presentation Video</h2>
          <video class="media-video" controls>
              <source src="video.mp4" type="video/mp4">
              <source src="video.ogg" type="video/ogg">
              Tu navegador no soporta la etiqueta de video.
          </video>
      </section>
          
      </nav>
    </footer>

</body>
</html>
`

