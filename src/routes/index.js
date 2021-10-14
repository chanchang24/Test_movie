import Movie from "containers/admin/Movie/Movie";
import Passport from "containers/admin/Dashboard/Dashboard";
import User from "containers/admin/User/User";
import About from "containers/client/About/About";
import DemoAntDesign from "containers/client/DemoAntDesgin/DemoAntDesign";
import DemoHOC from "containers/client/DemoHOC/DemoHOC";
import DemoHook from "containers/client/DemoHook/DemoHook";
import Home from "containers/client/Home/Home";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import Review from "containers/client/Review/Review";
import SeatPlan from "containers/client/SeatPlan/SeatPlan";
import Theater from "containers/client/Theater/Theater";
import Dashboard from "containers/admin/Dashboard/Dashboard";

export const clientRoutes =[
    {
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/theater',
        component: Theater,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/review',
        component:Review,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/about',
        component:About,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/movie-detail/:movieId',
        component:MovieDetail,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/seat-plan/:id',
        component:SeatPlan,
        exact: false,
        isPrivate: true,
    },
    {
        path: '/hook',
        component:DemoHook,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/hoc',
        component:DemoHOC,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/antd',
        component:DemoAntDesign,
        exact: false,
        isPrivate: false,
    },
   
]
export const adminRoutes =[
    {
        path: '/admin',
        component:Dashboard,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/user',
        component:User,
        exact: false,
        isPrivate: true,
    },
    {
        path: '/admin/movie',
        component:Movie,
        exact: false,
        isPrivate: true,
    },
];