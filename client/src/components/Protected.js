import { Redirect } from "react-router-dom";
const Protected = ({ isLoggedin, children }) => {

    if (isLoggedin === true) {
        return children;
    }
    else
        return <Redirect to="/login" replace />;

};
export default Protected;