import { useState } from "react"
import styles from "./Form.module.css"
import validation from "./validation"

export default function Form( {login} ) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

// preventDefault() para que no nos deje apretar submit y no se recargue la pagina
// login(userData) para que solo nos mande a /home si los datos ingresados coinciden con los establecidos en App
    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
            <>
            <div className={styles.divImg}>
                <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="RickMorty" className={styles.imgLogin} />
            </div>
            <form onSubmit={handleOnSubmit} className={styles.divForm}>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
                {errors.email && <span>{errors.email}</span>}

                <label htmlFor="password">Password </label>
                <input type="password" value={userData.password} onChange={handleInputChange} name="password" />
                {errors.password && <span>{errors.password}</span>}
                <button className={styles.submit}>Login</button>
            </form>
            </>
    )
}

