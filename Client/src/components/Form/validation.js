
const validation = (userData) => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = "El email ingresado no es válido";
    }
    if (!userData.email) {
    errors.email = "Debe ingresar un email";
    }
    if (userData.email.length > 35) {
        errors.email = "El email no puede superar los 35 carácteres";
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