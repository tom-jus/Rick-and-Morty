import { NavLink } from "react-router-dom";
import styles from './Card.module.css'


export default function Card({id, name, status, species, origin, gender, image, onClose}) {
   return (
      <div className={styles.container}>

         <button className={styles.boton} onClick={() => onClose(id)}>X</button>

         <img className={styles.image} src={image} alt="Character image"/>

         <NavLink className={styles.navLink} to={`/detail/${id}`}>
            <h1 className={styles.name}>{name}</h1>
         </NavLink>
         <h2 className={styles.description}>Status: {status}</h2>
         <h2 className={styles.description}>Gender: {gender}</h2>
         <h2 className={styles.description}>Species: {species}</h2>
         <h2 className={styles.description}>Origin: {origin}</h2>
      </div>
   )
};
