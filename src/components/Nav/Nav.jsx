import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"


export default function Nav({ onSearch, setAccess }) {

        const logOut = () => {
                setAccess(false);
        }

    return (
        <>
    <nav className={styles.divNav}>

        <div className={styles.divRick}>
                <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" className={styles.imgRick} />
        </div>

        <div className={styles.divBtn}>
        <NavLink to='/home'>
                <button className={styles.navButton}>Home</button>
        </NavLink>
                
        <NavLink to='/detail/:id'>
                <button className={styles.navButton}>Detail</button>
        </NavLink>

        <NavLink to='/about'>
                <button className={styles.navButton}>About</button>
        </NavLink>

        <NavLink to='/favorites'>
                <button className={styles.navButton}>Favorites</button>
        </NavLink>

        <NavLink to="/">
                <button onClick={logOut} className={styles.navButton}>Log out</button>
        </NavLink>

        </div>
        <div className={styles.divHenry}>
                <a href="https://www.soyhenry.com/" target="_blank">
                <img className={styles.imgHenry} src="https://avatars.githubusercontent.com/u/57154655?s=200&v=4" alt="Henry" />
                </a>
        </div>       
    </nav>
        <SearchBar onSearch={onSearch}/>
        </>
)};