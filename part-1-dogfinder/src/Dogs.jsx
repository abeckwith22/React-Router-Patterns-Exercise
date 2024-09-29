import { Link, useLoaderData } from "react-router-dom";

const Dogs = () => {
    const data = useLoaderData();

    return (
        <div id="DogList">
            <ul>
                {data.map(obj => <li><Link to={`${obj.src}`}>{obj.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default Dogs;