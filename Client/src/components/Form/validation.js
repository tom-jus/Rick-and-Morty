
const validation = (userData) => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)) {
        errors.username = "El email ingresado no es válido";
    }
    if (!userData.username) {
    errors.username = "Debe ingresar un email";
    }
    if (userData.username.length > 35) {
        errors.username = "El email no puede superar los 35 carácteres";
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = "La contraseña debe contener al menos un número";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6-10 carácteres";
    }

    return errors;
}

export default validation;