import Card from "../Card/Card"
import { connect } from "react-redux"
import styles from "./Favorites.module.css"

export function Favorites ({ myFavorites }) {

    return (
        <div className={styles.container}>
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