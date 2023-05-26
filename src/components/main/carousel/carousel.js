import React from 'react';
import './carousel.css'
import 'bootstrap/dist/css/bootstrap.css';
function Carousel(){
    return( 
    <header className="Carousel">
        <section className="info">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>   
                </div>
                <div class="carousel-inner">
                    <br/>
                    <br/>
                    <br/>
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="https://s3.amazonaws.com/fsociety.s/slider.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption">
                            <br/>
                            <h5>ACELERA TU NEGOCIO CON NUESTRO SOFTWARE DE GESTIÓN EMPRESARIAL</h5>
                            <p class="d-none d-md-block">Mejora procesos, eficiencia y toma de desiciones informadas para el crecimiento de tu empresa</p>
                            <form action="https://wa.me/573108322732" target="_blank">
                                <button class="btn btn-primary">Ver Más</button>
                            </form>
                        </div>  
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="https://s3.amazonaws.com/fsociety.s/slider2.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption">
                            <br/>
                            <h5>OPTIMIZA TU PRODUCTIVIDAD CON NUESTRO SOFTWARE DE COLABORACIÓN EN LÍNEA: TRABAJA EN TIEMPO REAL, COMPARTA ARCHIVOS Y SIMPLIFICA LA COMUNICACIÓN INTERNA</h5>
                            <p class="d-none d-md-block">Aumenta la eficiencia de tu equipo con nuestro software de colaboración en línea. Trabaja en tiempo real, comparte archivos y simplifica la comunicación interna en tu equipo de trabajo. Optimiza tu productividad y colabora de manera efectiva para alcanzar tus objetivos empresariales. ¡Mejora tu flujo de trabajo con nuestra herramienta de colaboración en línea y lleva tu equipo al siguiente nivel!</p>
                            <form action="https://wa.me/573108322732" target="_blank">
                                <button class="btn btn-primary">Ver Más</button>
                            </form>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="https://s3.amazonaws.com/fsociety.s/slider3.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption">
                            <br/>
                            <h5>GESTION DE CLIENTES POTENCIADA</h5>
                            <p class="d-none d-md-block">Impulsa tus ventas con nuestro software de gestión de clientes. Gestiona tus contactos, seguimientos de ventas y oportunidades de negocio de forma efectiva para cerrar más negocios.</p>
                            <form action="https://wa.me/573108322732" target="_blank">
                                <button class="btn btn-primary">Ver Más</button>
                            </form>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="https://s3.amazonaws.com/fsociety.s/slider4.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption">
                            <br/>
                            <h5>!LISTO PARA EL EXITO! ESTRECHA LA MANO DEL PROGRESO</h5>
                            <p class="d-none d-md-block">¡Alcanza tus metas! Haz negocios con confianza con Fsociety SanzWare.</p>
                            <form action="https://wa.me/573108322732" target="_blank">
                                <button class="btn btn-primary">Ver Más</button>
                            </form>
                        </div>
                    </div>
                </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
</header>);
}

export default Carousel;