import { NavLink } from "react-router-dom"
import styles from './Card.module.css'
import { addFav, removeFav } from "../../redux/actions"
import { connect } from "react-redux"
import { useState, useEffect } from "react"

export function Card({id, name, status, species, origin, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } 
      else {
         setIsFav(true);
         addFav({id, name, status, species, origin, gender, image, onClose});
         // En la funcion de abajo addFav, llega un objeto (character) por parametro, y realizamos el destructuring de ese objeto para obtener determinados datos
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={styles.container}>
         <div className={styles.divBoton}>
         {
            isFav ? (
               <button className={styles.botonFav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.botonFav} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.boton} onClick={() => onClose(id)}>X</button>
         </div>

         <img className={styles.image} src={image} alt="Character image"/>

         <NavLink className={styles.navLink} to={`/detail/${id}`}>
            <h1 className={styles.name}>{name}</h1>
         </NavLink>
         <h2 className={styles.description}>Status: {status}</h2>
         <h2 className={styles.description}>Gender: {gender}</h2>
         {/* <h2 className={styles.description}>Species: {species}</h2> */}
         {/* <h2 className={styles.description}>Origin: {origin}</h2> */}
      </div>
   )
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);