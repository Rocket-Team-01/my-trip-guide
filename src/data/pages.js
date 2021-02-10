import Home from "../components/Home"
import SignUp from "../components/SignUp"
import Login from "../components/Login"




const pages = [{
        "title": "Home",
        "exact": true,
        "component": Home,
        "link": "/",
        "isActive": true
    },
    {
        "title": "SignUp",
        "exact": false,
        "component": SignUp,
        "link": "/signup",
        "isActive": true
    },
    {
        "title": "Login",
        "exact": false,
        "component": Login,
        "link": "/login",
        "isActive": true
    }
]

export default pages;