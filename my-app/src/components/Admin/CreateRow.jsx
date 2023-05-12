import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function CreateRow(props) {


    const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=";

    function handleDelete() {
        console.log(props.ind);
        props.onDelete(props.ind);
    }


    return (

        <tr >
            <td><Link to="/personalProfile" state={props.tableRow.fid}>{props.tableRow.fid}</Link></td>
            <td>{props.tableRow.facultyName}</td>
            <td>{props.tableRow.designation}</td>
            <td>{props.tableRow.education}</td>
            <td>{props.tableRow.department}</td>
            <td>{props.tableRow.mobile}</td>
            {console.log(props.tableRow.mobile)}
            <td className="email"><a href={gmail + props.tableRow.email} > {props.tableRow.email}</a></td>
            <td>{props.tableRow.age}</td>
            <td>{props.tableRow.gender}</td>
            <td>{props.tableRow.experience}{" years"}</td>
            <td>{props.tableRow.doj}</td>
            <td><button className="deleteBtn" onClick={handleDelete} value={props.tableRow.id}><FaTrash /></button> </td>
        </tr>
    );
}

export default CreateRow;