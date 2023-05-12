// import { useNavigate } from "react-router-dom";
const express = require('express');
const router = express.Router();
const Faculty = require('../models/facultySchema');

// const navigate = useNavigate();

//Routes

router.post('/save', (req, res) => {
    const newData = new Faculty({
        fid: req.body.fid,
        facultyName: req.body.facultyName,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        age: req.body.age,
        gender: req.body.gender,
        education: req.body.education,
        designation: req.body.designation,
        department: req.body.department,
        doj: req.body.doj,
        experience: req.body.experience,
        aadhar: req.body.aadhar,
        pan: req.body.pan,
        mobile: req.body.mobile,
        email: req.body.email
        })
        newData.save()
        .then((results) => {
            // alert("Successfully added");
            res.send(results);
            console.log('Successfully added');
            // navigate("/admin");
            // res.send(res);
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
});

router.post('/getFaculty', async (req, res) => {
    let searchdata = req.body.searchdata;
    console.log(searchdata);
    // console.log(payload);
    let search = await Faculty.find({facultyName: {$regex: new RegExp('^'+searchdata+'.*','i')}}).exec();
    console.log(...search);
    search = search.slice(0,10);
    res.send({searchdata: search});
})

router.get('/getFacultyDetails', (req, res) => {
    Faculty.find()
    .then((results) => {
        console.log(results);
        res.send(results);
    })
    .catch((err) => {
        console.log(err);
    });
})



module.exports = router;











// app.get("/insert", (req, res) => {
//     Backend.find({})
//         .then((backendData) => {
//             res.json(backendData);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.post("/insert", (req, res) => {
//     const newData = new Backend({
//         facultyID: req.body.id,
//         fatherName: req.body.fatherName,
//         motherName: req.body.motherName,
//         age: req.body.age,
//         gender: req.body.gender,
//         education: req.body.education,
//         designation: req.body.designation,
//         doj: req.body.doj,
//         experience: req.body.experience,
//         aadhar: req.body.aadhar,
//         pan: req.body.pan,
//         mobile: req.body.phno,
//         email: req.body.email,
//     });
//     res.send(newData);

//     newData.save()
//         .then((results) => {
//             console.log("Successfully added ");
//             res.json(results);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })
