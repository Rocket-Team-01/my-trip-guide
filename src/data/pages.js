import Home from "../components/Home";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Search from "../components/Search";
import Contact from "../components/Contact";
import About from "../components/About";
import ProfilePage from "../components/ProfilePage";
import NotFound from "../components/NotFound";

const pages = [
  {
    title: "Home",
    isExact: true,
    component: Home,
    link: "/",
    isActive: true,
  },
  {
    title: "SignUp",
    isExact: false,
    component: SignUp,
    link: "/signup",
    isActive: true,
  },
  {
    title: "Login",
    isExact: false,
    component: Login,
    link: "/login",
    isActive: true,
  },
  {
    title: "Search",
    isExact: true,
    component: Search,
    link: "/search/:query",
    isActive: true,
  },
  {
    title: "Search",
    isExact: true,
    component: Search,
    link: "/search/:query/:category",
    isActive: true,
  },
  {
    title: "Contact",
    isExact: true,
    component: Contact,
    link: "/contact",
    isActive: true,
  },
  {
    title: "About",
    isExact: false,
    component: About,
    link: "/about",
    isActive: true,
  },
  {
    title: "Profile",
    isExact: false,
    component: ProfilePage,
    link: "/profilepage",
    isActive: true,
  },
  {
    title: "Not Found",
    isExact: false,
    component: NotFound,
    link: "/404",
    isActive: false,
  },
];

export default pages;
