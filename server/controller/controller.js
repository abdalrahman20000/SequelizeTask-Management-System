const { User } = require("../models");
const { Tasks } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/config.json");

const { Sequelize, Op } = require('sequelize');

exports.sign_up = async (req, res) => {

    const { email, pass, name } = req.body;

    const user = await User.create({ name: name, password: pass, email: email });

    console.log("Usre Created :)");

    res.status(201).json({ message: "user created", user });

}

exports.log_in = async (req, res) => {

    const { email, password } = req.body;


    const user = await User.findOne({ where: { email } })
        .catch(err => { console.log(err) });


    console.log(user);


    // const user = await User.findByPk(1);
    // if (user === null) {
    //   console.log('Not found!');
    // } else {
    //   console.log(user instanceof User); // true
    //   // Its primary key is 123
    // }

    if (!user) {
        console.log("Email or Password dose not match e");
        res.status(400).json({ message: "Email or Password dose not match u res" });
        return res.status(400).json({ message: "Email or Password dose not match" });
    }

    if (user.password !== password) {
        console.log("Email or Password dose not match p");
        res.status(400).json({ message: "Email or Password dose not match p res" });
        return res.status(400).json({ message: "Email or Password dose not match" });
    }


    console.log(user.password);
    console.log("Usre Found :)");

    res.status(201).json({ message: "user created", user });

}

exports.add_task = async (req, res) => {

    const { task_title, task_desc, user_id } = req.body;

    // console.log(User);
    // console.log(Tasks);
    console.log(user_id);
    console.log("Error here ?");

    const task = await Tasks.create({ task_title: task_title, task_desc: task_desc, user_id: user_id, is_deleted: false });

    res.status(201).json({ message: "Task Created", task });

    console.log("Task created :)");
}


exports.get_tasks = async (req, res) => {


    try {
        // `SELECT * FROM TASKS where user_id = ${}`
        const { uid } = req.query;
        console.log(uid);

        const result = await Tasks.findAll({
            where: {
                user_id: uid,
                is_deleted: "false"
            }
        });
        res.json(result); // Send the response with the data
    } catch (error) {
        console.error('Error fetching tasks:', error.message); // Log the error message
        if (!res.headersSent) { // Ensure headers have not been sent already
            res.status(500).json({ error: error.message }); // Send the error response
        }
    }

}

exports.update_task = async (req, res) => {
    try {
        // `SELECT * FROM TASKS where user_id = ${}`
        const { uid } = req.query;
        const { tid } = req.query;
        const { tname } = req.query;
        const { tdesc } = req.query;
        console.log(uid);
        console.log(tid);
        console.log(tname);
        console.log(tdesc);

        const result = await Tasks.update(
            {
                task_title: tname,
                task_desc: tdesc
            },
            {
                where: {
                    id: tid,
                    user_id: uid
                }
            }
        );
        res.json(result.rows); // Send the response with the data
        console.log("delete");
    } catch (error) {
        console.error('Error update tasks:', error.message); // Log the error message
        if (!res.headersSent) { // Ensure headers have not been sent already
            res.status(500).json({ error: error.message }); // Send the error response
        }
    }
}


exports.delete_task = async (req, res) => {
    try {
        // `SELECT * FROM TASKS where user_id = ${}`
        const { uid } = req.query;
        const { tid } = req.query;
        console.log(tid);
        console.log(uid);

        const result = await Tasks.update(
            { is_deleted: 'true' },
            {
                where: {
                    id: tid,
                    user_id: uid
                },
            },
        );
        res.json(result); // Send the response with the data
        console.log("delete");
    } catch (error) {
        console.error('Error fetching tasks:', error.message); // Log the error message
        if (!res.headersSent) { // Ensure headers have not been sent already
            res.status(500).json({ error: error.message }); // Send the error response
        }
    }
}