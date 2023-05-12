import React, { useState } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import tableInfo from "./tableInfo";
import { useNavigate } from "react-router-dom";


function MenuBar() {

    const [parsedData, setParsedData] = useState([]);

    const handleFile = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setParsedData(results.data);
            },
        });
    };
    function handleSubmit(event) {
        event.preventDefault();
        parsedData.map((data) => {
            tableInfo.push(data);
        });
    }


    return (
        <div className="menuBar">
            <div className="menuItem">
                <Link to="/addFaculty">Add Faculty</Link>
            </div>
            <div className="menuItem">
                <Link to="#">Update Faculty</Link>
            </div>
            <div className="menuItem">
                <form onSubmit={handleSubmit}>
                    <label for="csvFile">Upload Csv File</label>
                    <input type="file" id="fileUploader" name="csvFile" onChange={handleFile} accept=".csv" />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default MenuBar;