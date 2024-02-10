import { Route } from "react-router-dom";
import AllUser from "../page/AllUser";
import SignleUser from "../page/SignleUser";

const AppRoutes = [
    ["/", "/users"].map((path, index) => {
        return (<Route path={path} element={<AllUser/>} key={index}/>);
    }),
    <Route path="/user/:username" element={<SignleUser />} />,
]

export default AppRoutes;