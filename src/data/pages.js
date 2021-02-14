import Home from "../components/Home"
import SignUp from "../components/SignUp"
import Login from "../components/Login"
import Search from "../components/Search"



const pages = [{
        "title": "Home",
        "isExact": true,
        "component": Home,
        "link": "/",
        "isActive": true
    },
    {
        "title": "SignUp",
        "isExact": false,
        "component": SignUp,
        "link": "/signup",
        "isActive": true
    },
    {
        "title": "Login",
        "isExact": false,
        "component": Login,
        "link": "/login",
        "isActive": true
    },
    {
        "title": "Search",
        "isExact": true,
        "component": Search,
        "link": "/search/:query",
        "isActive": true
    }
]

export default pages;