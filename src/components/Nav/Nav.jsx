import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"


export default function Nav({onSearch, logout}) {

    return (
        <>
    <nav className={styles.divNav}>

        <div className={styles.divRick}>
                <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" className={styles.imgRick} />
        </div>

        <div className={styles.divBtn}>
                <button className={styles.navButton}>
                        <NavLink to='/home'>HOME</NavLink>
                </button>
                <button className={styles.navButton}>
                        <NavLink to='/detail/:id'>DETAIL</NavLink>
                </button>
                <button className={styles.navButton}>
                        <NavLink to='/about'>ABOUT</NavLink>
                </button>
                <button className={styles.navButton}>
                        <NavLink to="/">LOGOUT</NavLink>
                </button>
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