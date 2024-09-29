import { useLoaderData } from "react-router-dom";

const Color = () => {
    const { color_name, color_value } = useLoaderData();
    document.body.style = `background: ${color_value}` // bit hacky but it works.
    return (
        <div>
            <h1>Look at {color_name} in all its glory!</h1>

        </div>
    );
}

export default Color;
