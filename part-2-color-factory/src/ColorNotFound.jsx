import { useRouteError, Navigate } from "react-router-dom";

const ColorNotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Color not found</h1>
            <Navigate to="/colors"></Navigate>
        </div>
    );

}

export default ColorNotFound;
