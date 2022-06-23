class acrkNav  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
  }
  static get observedAttributes() {
    return ['label'];
  }
  attributeChangedCallback(attr, oldval, newval) {
    if (oldval !== newval) {
      this[attr] = newval;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section class="container">
      <div class="menup">
        <nav>
          <ul>
            <li>
              <a href="index.html" onclick="close_tab_window();">
                <img class="logo"
                  src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Logo2.png?attachauth=ANoY7coQYmgEJzQleSbPr8p6OXZ8YpS95zBoy3YzhkFuG02fBv3zVV3IVzlsUCje5l6qd_uNlqdZ4i71bHzXWjGR5mrvq7Tm0sGk1N0uH9HBGDFKz7nAZpgMTz1OCl-Qa_uQ1V1sac3spVdD6QLSn9SSQqv4COSIbbhcxyMEMLWaWkOV1pi8F8L_Og84sR5HfBY973SkyQcH&attredirects=0Logo2.png"
                  height=65px alt="">
              </a>
            </li>
            <li data-view="1" class="item"><i class="fa fa-users"></i>Quiénes Somos</li>
            <li data-view="2" class="item"><i class="fa fa-sitemap"></i>Organigrama</li>
            <li data-view="3" class="item"><i class="fa fa-user-friends"></i>Nuestras Actividades</li>
            <li data-view="6" class="item"><i class="fa fa-question"></i>Preguntas Frecuentes</li>
            <a href="./img/nuestrosvalores.png" target="_blank" onclick="close_tab_window();">
              <img class="sinpuntos" loading="lazy"
                src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/NuestrosValores1.gif?attachauth=ANoY7coD0v8MsEOsl-0l4JNBPYFtCHlD5t7degEftWfXnavhlExvhA9ONK7zR9M1bPbGRD9gZjOvtL1wOuI9JPZ2Ts6B8aUHdExI4MGtzdwQ78j1Yyie141pddum_RVROqBjCszj3Hlcgqrh6IODV4OEHhcfbrT9RfoOiSnA3Y9ckVYu462QC2DQziD8nTSdxjsE_YclWdZQei23gSpH9Ktn01SowAh7WA%3D%3D&attredirects=0"
                alt="">
            </a>
            <input type="checkbox" id="menuH" style="display: none;" />
            <a href="#" class="hamburger">
              <label for="menuH" class="_layer -top"></label>
              <label for="menuH" class="_layer -mid"></label>
              <label for="menuH" class="_layer -bottom"></label>
            </a>
            <nav class="menuppal">
              <ul>
                <li><a href="pages/medallero.html" onclick="close_tab_window();">Medalleros</a></li>
                <li><a href="pages/infoteca.html">Infoteca del Conocimiento</a></li>
                <li><a href="pages/videoteca.html">Videoteca del Conocimiento</a></li>
                <li><a href="pages/revista-virtual.html" onclick="close_tab_window();">Revista Virtual</a></li>
                <li><a href="pages/home_normativas.html" onclick="close_tab_window();">Normativas y Formatos</a></li>
                <li><a href="pages/inducciones.html" onclick="close_tab_window();">Inducciones</a></li>
                <li><a href="pages/calendario.html">Calendario de Procesos Hipotecarios</a></li>
                <li><a href="https://particulares.infinity8.app" onclick="close_tab_window();">Aplicaciones</a></li>
                <li><a href="https://forms.gle/VmiRzCTVrBbsyJTr7" target="_blank" onclick="close_tab_window();">Exprésate</a></li>
                <li><a href="pages/comunicados.html" onclick="close_tab_window();">Comunicados</a></li>
                <li><a href="pages/medios-de-pago.html" onclick="close_tab_window();">Medios de Pago</a></li>
                <li>Inducción al Site</li>
                <li><a href="pages/soporte-documental.html">Soporte Documental</a></li>
              </ul>
            </nav>
          </ul>
        </nav>
      </div>
      <div class="description" id="1">
        <div class="close">Cerrar Menú</div>
        <nav class="QuienesSomos">
          <section class="qs">
            <section class="quienes">
              <h2><i class="fas fa-users"></i> Quiénes Somos</h2><br>
              <h4a>Somos la Dirección orientada a brindar soporte y apoyo, de forma general, a la Dirección de Cobranza
                Minorista y en específico, a la Red de Cobranza Minorista (CER), llevando a cabo los procesos y operación
                que contribuyen a la Recuperación de manera centralizada.</h3a>
            </section>
            <section class="mision">
              <h2><i class="fas fa-user-tie"></i> Misión</h2>
              <h4a>Coordinar y asegurar que los procesos de la Gestión de Cobranza, en todos los participantes, funcionen y
                estén totalmente apegados a Normativas, Políticas, Productos y Estrategias relacionados con la
                Administración y Recuperación del Portafolio Minorista; garantizando la mejora continua y la gestión del
                Riesgo Operacional, apoyando el logro de los objetivos y metas de la Dirección de Cobranza Minorista.</h4a>
            </section>
            <section class="vision">
              <h2><i class="fas fa-hiking"></i> Visión</h2>
              <h4a>Ser el apoyo de toda la Dirección de Cobranza Minorista contribuyendo al logro de las metas y objetivos
                en apego a las políticas de la empresa.</h4a>
            </section>
          </section>
        </nav>
      </div>
      <div class="description" id="2">
        <div class="close">Cerrar Menú</div>
        <img class="organigrama" loading="lazy"
          src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Organigrama%202022.jpg?attachauth=ANoY7crIcYjiJ72ocnb28Ku8yieaei-yVt5QSMAqaVlOCa7EyABv8Z3-RRSNj_Wc2OwY5FapmjHShnKNqzAeIWRXPijTYDQTCdZgo_1KLrmGxeyMwDm9hsnBv2NGq8ke6dITzAM0sgX-hcEb8UoLcpZhrB1AzLza9tkASx8QTJ1rxr3w-I76hI8THD-m9ZQKVeOv7UO-EYUYrOYjmRnzXQRuXs716fHS3A%3D%3D&attredirects=0"
          alt="">
      </div>
      <div class="description" id="3">
        <div class="close">Cerrar Menú</div>
        <div class="containeractividades">
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Versi%C3%B3n%20Adriana%20Ru%C3%ADz%20%281%29.jpg?attachauth=ANoY7cpjCgpiEePO7cPkFLgB0z415JQ1-2BPG33EwpMAK_42VwK_OvdlCSQZfaBytyIlPMfNcRPwLbJiBrCUX65mhvY2kiq9VuD59KjT1eYe4LyN1g57SoWZzZuJvuz-M1WYSIony-AJ5hxvnAsMUfTjUHsJKDJljzYzGKj6bd3-mgQoHl-MhpuHaBZZWaH8AQX9xxt5mcjMLOSwQwf2zTWKWRWxhKbqv0xt5csBY0S6tXzwwTWKXCY%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Versi%C3%B3n%20Adriana%20Ru%C3%ADz%20%281%29.jpg?attachauth=ANoY7cpjCgpiEePO7cPkFLgB0z415JQ1-2BPG33EwpMAK_42VwK_OvdlCSQZfaBytyIlPMfNcRPwLbJiBrCUX65mhvY2kiq9VuD59KjT1eYe4LyN1g57SoWZzZuJvuz-M1WYSIony-AJ5hxvnAsMUfTjUHsJKDJljzYzGKj6bd3-mgQoHl-MhpuHaBZZWaH8AQX9xxt5mcjMLOSwQwf2zTWKWRWxhKbqv0xt5csBY0S6tXzwwTWKXCY%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Armando%20%281021%29.jpg?attachauth=ANoY7cpi4mxUbvh02LvBM33vk5HjJq-PXd2KMGnhu2tkrtGn7gu6RnhZPDxgl_ijvEHi6CuaHkCWBSlfPsfWW0LGUu0ZTXKLKoEOFCEPSeu_nBO3LaxZv9B4n0KpmG3CefEu3OcdMrrFkc6WHpmOHeDdKH10_wAqoVmQiQgYgeHeNsk1bcK_a8pTVoH-wbzDrlxbCrGKnw7MizNuFhBmsmuaY2HqqZnm3Q%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Armando%20%281021%29.jpg?attachauth=ANoY7cpi4mxUbvh02LvBM33vk5HjJq-PXd2KMGnhu2tkrtGn7gu6RnhZPDxgl_ijvEHi6CuaHkCWBSlfPsfWW0LGUu0ZTXKLKoEOFCEPSeu_nBO3LaxZv9B4n0KpmG3CefEu3OcdMrrFkc6WHpmOHeDdKH10_wAqoVmQiQgYgeHeNsk1bcK_a8pTVoH-wbzDrlxbCrGKnw7MizNuFhBmsmuaY2HqqZnm3Q%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Gabriel%20Le%C3%B3n%202%20%281021%29.jpg?attachauth=ANoY7cpCKrmTgHxXV778yR5hMhsDhZw6vlW9nRiBNRH9N-LsTDqM9zuB7tPFW4v-g87b2eFluJgVLjJiBfn--RUgC9vZFYi036cEWxOQ_c2yBPDZcZlyWwbyPEdlEPcQfI3wnHgl-CYhKMsvLw2NfL-xC4JD2iC8KBYwS6G5bBDL8mA6hcFsA_001Q7PSwLzzQtam_kZKGpSVM8J-zXJhlS0wMI7u4hjUgzYbj2qxTMt8tmejEM_FMs%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Gabriel%20Le%C3%B3n%202%20%281021%29.jpg?attachauth=ANoY7cpCKrmTgHxXV778yR5hMhsDhZw6vlW9nRiBNRH9N-LsTDqM9zuB7tPFW4v-g87b2eFluJgVLjJiBfn--RUgC9vZFYi036cEWxOQ_c2yBPDZcZlyWwbyPEdlEPcQfI3wnHgl-CYhKMsvLw2NfL-xC4JD2iC8KBYwS6G5bBDL8mA6hcFsA_001Q7PSwLzzQtam_kZKGpSVM8J-zXJhlS0wMI7u4hjUgzYbj2qxTMt8tmejEM_FMs%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Guadalupe%20%281021%29.jpg?attachauth=ANoY7cqVz7A-VMoFn5xA4jNkPI-M7xcDh9OZt7xnHTFQuxvfsnMbuP8HXrjquDsMPvAtSPt7qEaG5k8kN8kbZN758uEN1egGpCB-W1xLZ5itbODeaLJutJOjy6rmRp0n92C33ueCLRdhqoydGAp-BZSuideOGh-IMfCVXxcFQn4zil0zvr5AnMpbJEPBa3q4a6q4q1H4Vd814wiXCNrzQG4HMfi92dFORg%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Guadalupe%20%281021%29.jpg?attachauth=ANoY7cqVz7A-VMoFn5xA4jNkPI-M7xcDh9OZt7xnHTFQuxvfsnMbuP8HXrjquDsMPvAtSPt7qEaG5k8kN8kbZN758uEN1egGpCB-W1xLZ5itbODeaLJutJOjy6rmRp0n92C33ueCLRdhqoydGAp-BZSuideOGh-IMfCVXxcFQn4zil0zvr5AnMpbJEPBa3q4a6q4q1H4Vd814wiXCNrzQG4HMfi92dFORg%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Iris%20%281021%29.jpg?attachauth=ANoY7crkMRwMapFHyPJBlYPWOklLENiGN3OaQR2AXtfSzz5iqCNFaU6KkO94bwTDoWpcJbOXZbusGR2BSINozhyqHrP2Bg8Bo6fNONmW9YUd_IaMNzXOycPEiwUjVKYALlblhVfPDa0sZM7GYwzOmxuAYVjxLwxYmsxAWQRMOSNgLpTLNMUpVWm1Qf7OhdmzCCTZPkpiEDDn61W2SvxEIivZUw0YIrKkVw%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Iris%20%281021%29.jpg?attachauth=ANoY7crkMRwMapFHyPJBlYPWOklLENiGN3OaQR2AXtfSzz5iqCNFaU6KkO94bwTDoWpcJbOXZbusGR2BSINozhyqHrP2Bg8Bo6fNONmW9YUd_IaMNzXOycPEiwUjVKYALlblhVfPDa0sZM7GYwzOmxuAYVjxLwxYmsxAWQRMOSNgLpTLNMUpVWm1Qf7OhdmzCCTZPkpiEDDn61W2SvxEIivZUw0YIrKkVw%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Pedro%20%281021%29.jpg?attachauth=ANoY7cpzDfcwDVmLN47Wpe2how_DofrEY8GV6oL-4UE0pbfM3H-GtXIqwbNzWprNkEDo2GOLI5-5nm6lhMHtVFki45jaIdEMfN-1ermQ1NkAYSQCW53YqKKhz0C_rCAezKdMVojOg5PVNpJTpgfhgUYNYpn8Hd1TJRMC3YmiioJ9e-GWywaJLop9c2nFFfpCR9gx94cwlQcSXOMP54YgpEGwkT5glXsQOg%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Pedro%20%281021%29.jpg?attachauth=ANoY7cpzDfcwDVmLN47Wpe2how_DofrEY8GV6oL-4UE0pbfM3H-GtXIqwbNzWprNkEDo2GOLI5-5nm6lhMHtVFki45jaIdEMfN-1ermQ1NkAYSQCW53YqKKhz0C_rCAezKdMVojOg5PVNpJTpgfhgUYNYpn8Hd1TJRMC3YmiioJ9e-GWywaJLop9c2nFFfpCR9gx94cwlQcSXOMP54YgpEGwkT5glXsQOg%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Adriana%20%281021%29.jpg?attachauth=ANoY7cqH8jDpWw1mooNgGCwDbdWT-AwMH6hE6X58Bz0r-mWy0oE62BU154uOkVKQZTMnAxQrAPpmFb0zL2d0vjGJZx3AI3WJdN32kEaPE8AihUw1hszp9enFfWABbeoweatUWLlTs0kKu3N50gSa_JijnJj8G_IA8LKtrTMp5LXydFQYKS7-MvRMmp5mvUPLV5ZqMyXh2QriQ3N1LnyfOl7cnoyEhGxMAQ%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Adriana%20%281021%29.jpg?attachauth=ANoY7cqH8jDpWw1mooNgGCwDbdWT-AwMH6hE6X58Bz0r-mWy0oE62BU154uOkVKQZTMnAxQrAPpmFb0zL2d0vjGJZx3AI3WJdN32kEaPE8AihUw1hszp9enFfWABbeoweatUWLlTs0kKu3N50gSa_JijnJj8G_IA8LKtrTMp5LXydFQYKS7-MvRMmp5mvUPLV5ZqMyXh2QriQ3N1LnyfOl7cnoyEhGxMAQ%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Male%281021%29.jpg?attachauth=ANoY7cq68ovdhqPQwt_3yl_KgmrZ7VIuiwBlIwtSmS-pPzHJbVi1WEwGlhrZu6TWjoDspMOg1slNnc-hTkg4Lkm_A7DhuULANVJUUcNVJf4_BNeWYHWpx5rk0T1JEiuh0grKCtky682sJ3xtpH8BOV5nSeoYQb1gwsp6HJBfYY_9TozAAb1332Q1JSP2SOVqiCEjgbq9xv0MgDxV_TOSvLWIHUWi9MCs4A%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Male%281021%29.jpg?attachauth=ANoY7cq68ovdhqPQwt_3yl_KgmrZ7VIuiwBlIwtSmS-pPzHJbVi1WEwGlhrZu6TWjoDspMOg1slNnc-hTkg4Lkm_A7DhuULANVJUUcNVJf4_BNeWYHWpx5rk0T1JEiuh0grKCtky682sJ3xtpH8BOV5nSeoYQb1gwsp6HJBfYY_9TozAAb1332Q1JSP2SOVqiCEjgbq9xv0MgDxV_TOSvLWIHUWi9MCs4A%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/M%C3%B3ni%20%281021%29.jpg?attachauth=ANoY7cqIxyRS3RqEGwv25kkOSPoP7OiXcL5p_o3-x-1dA29Rb60vKfAck6TEway--jNxi3IAomxLPsvqKxW7nz9MPpIQrlpU_rNTvvjJ_-5lJDz-YniBf5QkXZVVjCSqK7AJrq9ooH3ahM8b7M0d4QdOUBHAwuSIJ_eXHA0GV5pnZqImmw4spXw8F90ETKWOuWq0ca4QZU6WR04jFSW4-hx6YB0Txy_Fag%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/M%C3%B3ni%20%281021%29.jpg?attachauth=ANoY7cqIxyRS3RqEGwv25kkOSPoP7OiXcL5p_o3-x-1dA29Rb60vKfAck6TEway--jNxi3IAomxLPsvqKxW7nz9MPpIQrlpU_rNTvvjJ_-5lJDz-YniBf5QkXZVVjCSqK7AJrq9ooH3ahM8b7M0d4QdOUBHAwuSIJ_eXHA0GV5pnZqImmw4spXw8F90ETKWOuWq0ca4QZU6WR04jFSW4-hx6YB0Txy_Fag%3D%3D&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Jessica%201021.jpg?attachauth=ANoY7cpNhpoxW6jobI9Ugspvta1HhwLHt80ODcQ14Bj_OYbg_SzBii25t8Jqt7afSxRgXOx1ibAPynNIMY6Ymae3NY1cl-o76coSxc9N_tJ2ogts6JiE6qcDvYOp-7hUEeh_9OTyWyi92TAHLdBQ2-lKc_z8myTtvn2kCRLG8mV0oL5q1xH_K-RE_wZyXotXcwS61ldhHiRe&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Jessica%201021.jpg?attachauth=ANoY7cpNhpoxW6jobI9Ugspvta1HhwLHt80ODcQ14Bj_OYbg_SzBii25t8Jqt7afSxRgXOx1ibAPynNIMY6Ymae3NY1cl-o76coSxc9N_tJ2ogts6JiE6qcDvYOp-7hUEeh_9OTyWyi92TAHLdBQ2-lKc_z8myTtvn2kCRLG8mV0oL5q1xH_K-RE_wZyXotXcwS61ldhHiRe&attredirects=0"
              alt="">
          </a>
          <a href="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Nadya%20%280222%29.jpg?attachauth=ANoY7coPtJthN7H2W24mNiHpUOepMm2rwIYkiYKHax2akftbIdDMRDpmwr3VvqgoNBLIjQDnRpsAb_YRe58MGmTOgzH0hZocraPDYk1tvSEnSezmY49dS3cg-0rQfhBeO9oyrzwzONObjhuAyD7fOtD1DWYJ3CKEO-LbW_tKI4LmAVCHELxqnZDfqeJVz5nTbK57VIDhI_yd9WLYSr5RaQQ18AkI6I28Mw%3D%3D&attredirects=0"
            target="_blank">
            <img class="actividades"
              src="https://be0d591a-a-8e9718e0-s-sites.googlegroups.com/a/bbva.com/mx-so/Nadya%20%280222%29.jpg?attachauth=ANoY7coPtJthN7H2W24mNiHpUOepMm2rwIYkiYKHax2akftbIdDMRDpmwr3VvqgoNBLIjQDnRpsAb_YRe58MGmTOgzH0hZocraPDYk1tvSEnSezmY49dS3cg-0rQfhBeO9oyrzwzONObjhuAyD7fOtD1DWYJ3CKEO-LbW_tKI4LmAVCHELxqnZDfqeJVz5nTbK57VIDhI_yd9WLYSr5RaQQ18AkI6I28Mw%3D%3D&attredirects=0"
              alt="">
          </a>
        </div>
      </div>
      <div class="description" id="4">
        <div class="close">Cerrar Menú</div>
        <ul class="recursosgraficos">
          <li><a href="#">Infoteca del Conocimiento</a></li>
          <li><a href="#">Videoteca del Conocimiento</a></li>
          <li><a href="#">Revista Virtual</a></li>
          <li><a href="#">Inducciones</a></li>
        </ul>
      </div>
      <div class="description" id="5">
        <div class="close"></div>Te Escuchamos
      </div>
      </div>
      <div class="description" id="6">
        <div class="close">Cerrar Menú</div>
        <div class="bannerimg">
          <p> <a href="https://forms.gle/2ZyJ14YYRubqhYu98" target="_blank"><img class="imgEscuchamos"
                src="img/teescuchamos.png" alt=""></a> </p>
        </div>
        <button class="accordion">Pregunta: Ingreso con mi correo y contraseña y dice usuario ó contraseña incorrecta ¿por
          qué?</button>
        <div class="panel">
          <p>Respuesta: Si eres nómina interna, el SITE no solicitará usuario, una vez firmado en el HPD (Entorno
            Colaborativo). <br>
    
            Si eres nómina externa, el SITE solicitará te identifiques, el usuario es tu número de SAP y la contraseña (por
            primera ocasión será el SAP), te pedirá la personalices para futuros accesos.<br>
    
            Existen algunos apartados dentro del SITE que te pedirán usuario y contraseña, si no tienes acceso, es posible
            que no cuentes con los privilegios, sólo personal autorizado podrá ingresar, dependiendo de las distintas
            actividades.</p>
        </div>
        <button class="accordion">Pregunta: ¿Qué beneficios nos da este portal?</button>
        <div class="panel">
          <p>Respuesta: En el SITE puedes encontrar información de primera mano sobre cambios y mensajes importantes
            relacionados con el CER, además tendrás herramientas útiles para tus actividades diarias y constante
            actualización que te ayudará a seguir creciendo de manera personal y profesional.</p>
        </div>
        <button class="accordion">Pregunta: ¿Por qué no tengo acceso a las normativas?</button>
        <div class="panel">
          <p>Respuesta: Esta sección, sólo está disponible, si estás conectado a la red interna de BBVA.</p>
        </div>
      </div>
    </section>
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      .chip {
        background: #F8CD51;
        border-radius: 9px;
        height: 18px;
        padding: 0 9px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        width: fit-content;
      }
    <style>`;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define('acrk-nav', acrkNav);