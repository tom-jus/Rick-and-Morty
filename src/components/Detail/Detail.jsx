import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./Detail.module.css"

export default function Detail() {

    const { id } = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
            // if (data.name) {
              setCharacter(data);
            // } else {
            //   window.alert("No hay personajes con ese ID");
            // }
          })
        return setCharacter({});
      }, [id]);
    

    return (
      <>
            {character.name ? (
              <>
            <div className={styles.divDetail}>
              <div className={styles.divImg}>
                <img className={styles.image} src={character.image} alt="Character image"/>
              </div>
              <div className={styles.divNames}>
                <h2 className={styles.names}>{character.name}</h2>
                <h2 className={styles.names}>{character.status}</h2>
                <h2 className={styles.names}>{character.gender}</h2>
                <h2 className={styles.names}>{character.species}</h2>
                <h2 className={styles.names}>{character.origin?.name}</h2>
              </div>
          </div>
            </>
            ) : (<h1 className={styles.loading}>Loading...</h1>)  
            }

           
      
            <button className={styles.btn}>
                <NavLink to={"/home"}>BACK</NavLink>
            </button>
      </>
    )
};