import { useLoaderData, Link } from "react-router-dom";
import "../styles/root.css"

const Root = () => {
    document.body.style = `background: #242424` // still hacky, but hey, it works
    const colors = useLoaderData();
    return (
        <>
            <div id="Root">
                <h1>Welcome to the color factory</h1>
                <Link to={`new`}>Add a new color!</Link>
                <nav>
                    <ul>
                        {colors.map(color => <li><Link to={color}>{color}</Link></li>)}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Root;