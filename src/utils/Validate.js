
const checkvalidate = (email, password) => {
    const checkpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const checkemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (checkpassword === false) return "Please Enter a valid password";
    if (checkemail === false) return "Pleas Enter a valid email";

    return null;
}

export default checkvalidate;
