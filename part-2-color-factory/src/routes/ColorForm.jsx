import { Form } from "react-router-dom";

const ColorForm = () => {
    return (
        <div>
            <h1>Color Form</h1>
            <Form method="post" action="/colors/new">
                {/* color name */}
                <label htmlFor="color_name">color</label> 
                <input id="color_name" name="color_name" placeholder="Color"/>

                {/* color value */}
                <label htmlFor="color_value">color</label> 
                <input id="color_value" type="color" name="color_value" placeholder="Color"/>

                <button>Submit New Color!</button>
            </Form>
        </div>
    )
}

export default ColorForm;