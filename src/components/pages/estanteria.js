import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/e-container.css";
import BackButton from '../BackButton';
import viviren from '../pdf/Vivir en Creación Eterna.pdf';
import ciclosabio from '../pdf/Ciclo Sabio.pdf';
import cloud from '../../images/nube.png';

const Estanteria = () => {
  return (
    <div className="estanteria-container">
      <BackButton />
      <h1 className="estanteria-title">Esta es la estantería de autoría</h1>
      <img src={cloud} className="cloudy cloud-1" alt="Cloud 1" />
      <img src={cloud} className="cloudy cloud-2" alt="Cloud 2" />
      <img src={cloud} className="cloudy cloud-3" alt="Cloud 3" />
      <img src={cloud} className="cloudy cloud-4" alt="Cloud 4" />
      <img src={cloud} className="cloudy cloud-5" alt="Cloud 5" />
      <div className="estanteria-buttons">
        <div>
        <h2>Vivir en Creación Eterna</h2>
        <h3>Puesta en Escena Visión Somática</h3>
        <p>“Hoy ya no se necesitan jefes ni maestros de los tiempos de las fábricas de la industrialización, el triunfo del capitalismo está en que nosotros mismos seamos quienes ponemos las expectativas y las convirtamos en exigencias (Byung - Chul Han). Somos, simultáneamente, burgueses y esclavos. Soy, simultáneamente, burguesa y esclava de mí misma”.</p>
        <a href={viviren} className="estanteria-button" download>
          Descargar "Vivir en Creación Eterna"
        </a>
        </div>
        <div>
        <h2>Ciclo Sabio</h2>
        <h3>Laboratorio de Anatomía Experiencial</h3>
        <p>“El proceso de sanación somática no es cosa de un día, sino que es un largo y hermoso camino en el que me permito escucharme y preguntarme ¿qué es lo que esto me quiere decir?, porque dentro de las muchas reflexiones, entender el dolor como un llamado a la revisión y a la pausa, ha sido fundamental”.</p>
        <a href={ciclosabio} className="estanteria-button" download>
          Descargar "Ciclo Sabio"
        </a>
        </div>
      </div>
      <div className="estanteria-buttons">
        
        
      </div>
    </div>
  );
};

export default Estanteria;  
