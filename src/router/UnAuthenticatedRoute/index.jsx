import { createBrowserRouter, Navigate } from "react-router-dom"
import { MainLayouts, UserPanelLayout } from "../../components/layouts"
import {
    ContactUs,
    Error404,
    EventDetails,
    EventList,
    Landing,
    Dashboard,
    Favorites,
    Information,
    MyCourses,
    MyViews,
    Reserved,
    Security,
    EditInformation,
    Login,
    ForgetPasswordLogin,
    TowStepLogin,
    Register
} from "../../screen"

const routerPublic = createBrowserRouter([
    {
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> },
            { path: '/ContactUs', element: <ContactUs /> },
            { path: '/Events', element: <EventList /> },
            {
                path: '/EventDetails',
                element: <EventDetails />,
                children: [{ path: '/EventDetails/:id', element: <EventDetails /> }]
            },
            { path: '/*', element: <Error404 /> },
        ]
    },
    {
        path: '/authorize',
        children: [
            {
                path: "/authorize/login",
                children: [
                    { index: true, element: <Login /> },
                    { path: "/authorize/login/twoStep", element: <TowStepLogin /> },
                ]
            },
            { path: "/authorize/forgetPassword", element: <ForgetPasswordLogin /> },
            {path: "/authorize/register", element: <Register />}
        ]
    },
    {
        element: <UserPanelLayout />,
        children: [
            { path: "/userPanel", element: <Dashboard /> },
            { path: "/userPanel/information", element: <Information /> },
            { path: "/userPanel/editInformation", element: <EditInformation /> },
            { path: "/userPanel/myCourses", element: <MyCourses /> },
            { path: "/userPanel/reserved", element: <Reserved /> },
            { path: "/userPanel/myViews", element: <MyViews /> },
            { path: "/userPanel/favorites", element: <Favorites /> },
            { path: "/userPanel/security", element: <Security /> },
        ]
    }
])
export default routerPublic