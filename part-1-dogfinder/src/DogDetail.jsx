import { useLoaderData } from "react-router-dom";

const DogDetail = () => {
    const {id, name, age, facts } = useLoaderData();
    return (
        <div key={id}>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Fun Facts about {name}</h3>
            <ul>
                {facts.map(str => <li>{str}</li>)}
            </ul>
        </div>
    );
};

export default DogDetail;