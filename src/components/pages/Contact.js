import React from "react";
import "../styles/contact.css";
import chv from '../pdf/Hoja de Vida SLRiveraC 2024.pdf';
import BackButton from '../BackButton';

const Contact = () => {
  return (
    <div className="contact-container">
        <BackButton />
      {/* Agradecimientos */}
      <div className="contact-section">
        <h2 className="contact-title">Agradecimientos</h2>
        <p>
          <b>A mamá</b>, por siempre sostenerme con tus manos de heliconia. <br /><br />
          <b>A mi familia</b>; Enano, Angüelita y Rana Porcina. <br /><br />
          <b>A mis profesoras, profesores y colegas</b> por acompañar y guiar en
          horizontalidad. <br /><br /> 
          <i>A esta casita y quienes la hicieron posible. </i> <br /><br />
          <br />
          <b>A Elena</b>, por sentarnos a reflexionar y repensarnos tantas cosas. Por
          las mágicas coincidencias en intuición. Por darme tierra,
          complejidad y contundencia. Por acompañarme en este viaje de esculpir
          los adentros. <br /><br />
          <b>A Isa Pez</b>, la arquitecta, jardinera y constructora, por convertir en
          trazos y color las imaginaciones. Por la paciencia al descifrar mis
          deseos, y por darle vida hermosa a una idea loca. Por hacerle conejo
          con tu arte a la institución. <br /><br />
          <b>A Blanquito</b>, por ser la magia programadora detrás del viaje. El
          ingeniero artista, el capitán de la matrix. Gracias por llamarme a la
          calma y a no subestimar la sencillez. <br />
          <br />
          Por tanto amor y generosidad, gracias.
        </p>
      </div>

      {/* Contacto */}
      <div className="contact-section">
        <h2 className="contact-title">Contacto</h2>
        <p>
          Sara Lucía Rivera Castro <br />
          Artista Escénica y Socióloga <br />
          <a href="mailto:riveracastrosaralucia@gmail.com">
            riveracastrosaralucia@gmail.com
          </a>
          <br />
          Instagram: <a href="https://instagram.com/saralu.2001">@saralu.2001</a>
        </p>

        {/* Botón para descargar CV */}
        <a href={chv} className="contact-button" download>
          Consulta mi Hoja de Vida
        </a>
      </div>
    </div>
  );
};

export default Contact;
