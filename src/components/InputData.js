import './components.css';
import { useState } from 'react'

function InputData({ submitHandler }) {
    const [jsonData, setJsonData] = useState({});
    const updateJson = (event) => {
        setJsonData(event.target.value);
    };

    function submit(e) {
        e.preventDefault();
        submitHandler(JSON.parse(jsonData));
    }

    return (
        <div className="InputData">
            <form onSubmit={submit}>
                <input type="text"
                    value={jsonData}
                    onChange={updateJson}
                    placeholder="Please enter your jsonData" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default InputData;
