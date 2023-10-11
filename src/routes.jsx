import { createBrowserRouter } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import App from "./App";
import Home from "./Components/Home/Home";
import PhotoGallery from "./Components/Gallery/Gallery";
import EventsList from "./Components/Events/EventsList";
import EventDetails from "./Components/Events/EventDetails";
import EventsBooked from "./Components/Events/EventsBooked";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <h1>ERROR 404</h1>,
        element: <App></App>,
        children: [
            {
                path: "/",
                loader: ()=>fetch("/jsons/onGoingEvents.json"),
                element: <Home></Home>
            },
            {
                path: "login/",
                element: <Login></Login>
            },
            {
                path: "register/",
                element: <Register></Register>
            },
            {
                path: "gallery/",
                element: <PhotoGallery></PhotoGallery>
            },
            {
                path: "events/",
                loader: ()=>fetch("/jsons/onGoingEvents.json"),
                element: <EventsList></EventsList>
            },
            {
                path: "events/:id",
                loader: ()=>fetch("/jsons/onGoingEvents.json"),
                element: <PrivateRoutes><EventDetails /></PrivateRoutes>
            }
        ]
    }
]);

export default routes;