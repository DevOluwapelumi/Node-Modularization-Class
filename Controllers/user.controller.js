const userWelcome = (req, res) => {
    res.send("Welcome To DevOluwapelumi's Route");
    console.log("Welcome To DevOluwapelumi's Route");
}
const register = (req, res) => {
    res.send([{ Message: "Invalid Credentials: No token" }]);
    console.log("Invalid Credentials: No token");
}
const login = (req, res) => {
    res.send([{ Message: "Not Authorised: No token" }]);
    console.log("Not Authorised: No token");
}
const logout = (req, res) => {
    res.send([{ Message: "Log out Successfully" }]);
    console.log("Log out Successfully");
}


module.exports = { userWelcome, register, login, logout };