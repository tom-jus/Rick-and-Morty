import Card from "../Card/Card"
import { connect } from "react-redux"
import styles from "./Favorites.module.css"
import { orderCards, filterCards } from "../../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

export function Favorites ({ myFavorites }) {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
            dispatch(orderCards(event.target.value));
            setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={styles.container}>
            <div className={styles.divSelect}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Gender less">Gender less</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            </div>
            <div className={styles.container2}>
            {
                myFavorites?.map((fav) => {
                    return (
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        status={fav.status}
                        origin={fav.origin}
                        onClose={fav.onClose}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (
    mapStateToProps,
    null
)(Favorites);