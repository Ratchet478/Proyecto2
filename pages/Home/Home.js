import "./Home.css";
import { cleanPage } from "/utils/cleanPage";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="home">
    <p>Hey, Soy</p>
    <h1>Alex Alvarez</h1>
    <p>Soy un desarollador web basado en españa.
    Estoy aprendiendo a crear sitios web con HTML, CSS y JavaScript.
    Para visitrar mis proyectos tanto activos como el codigo de los experimentos he ido desarrollando En la pestaña de proyectos puede que encuentres algo de interes.
    Te pica la curidad de como esta echa esta web? el icono de github en la barra de navegacion te lleva directamente tras bambalinas
    </p>
    <a href="mailto:ratchet478@protonmail.com">Hablamos?</a>
    </section>`;
};