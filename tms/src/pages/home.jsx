
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Trash, PencilOff } from 'lucide-react';
import axios from "axios"

function Home() {


    const navigate = useNavigate();

    const [task_title, set_title] = useState("");
    const [task_desc, set_desc] = useState("");
    const [user_id, set_user_id] = useState(sessionStorage.getItem("eid"));
    const [task_id, set_task_id] = useState(sessionStorage.getItem("eid"));
    const [is_deleted, set_is_deleted] = useState(false);
    const [tasks, set_taks] = useState([]);
    const [update_button, set_update_button] = useState(false);

    // const [t_desc, set_desc] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/db/tms/tasks?uid=${user_id}`)
            .then((res) => { set_taks(res.data) })
            .catch((err) => console.log(err))


    }, []);

    console.log(tasks);
    // console.log(user_id);




    async function handel_add(e) {
        e.preventDefault();

        const user_id = sessionStorage.getItem("eid");


        // console.log(eid);

        try {
            const response = await axios.post("http://localhost:5000/db/tms/tasks", { task_title, task_desc, user_id, is_deleted });

            alert("Task added successfully");
        } catch (err) {
            console.error("Failed to add task:", err.response ? err.response.data : err.message);
            alert("Failed to add task");
        }

        alert(task_title, task_desc, user_id, is_deleted);


        // let task = {
        //     title: t_title,
        //     desc: t_desc,
        // };


        set_title("");
        set_desc("");
        set_is_deleted("");

    }


    async function update_handle() {

        // setFormVisible(true);
        // console.log(tid, task_title, task_desc);

        axios.put(`http://localhost:5000/db/tms/tasks?uid=${user_id}&tid=${task_id}&tname=${task_title}&tdesc=${task_desc}`)

        alert("Task Updated !!!" + tid);

        set_update_button(false)
    }


    async function delete_handle(tid) {

        set_is_deleted(true);

        axios.patch(`http://localhost:5000/db/tms/tasks?uid=${user_id}&tid=${tid}`)

        alert("Task Deleted !!!");
    }


    return (

        <>
        
            <main className='min-h-[77vh]'>
                <div className="tasks flex justify-center items-center flex-wrap">

                    {tasks.map((task) => {
                        return (
                            <div key={task} className="task flex justify-between items-center bg-[#f7ff65] m-4 p-4 rounded-md  w-[45%]">
                                <input className='w-5 h-5 border-4 border-[#000000]' type="checkbox" name="" id="" />

                                <div className="">
                                    <h3 className='text-xl font-semibold'>{task.task_title}</h3>
                                    <h4 className='text-md'>{task.task_desc}</h4>

                                </div>

                                <div className="flex items-center">
                                    <span className='m-2 hover:text-[#98ff5c]' onClick={() => { set_task_id(task.id), set_update_button(true) ,() => {update_handle(task_id,task_title,task_desc)} }}><PencilOff /></span>
                                    <span className='m-2 hover:text-[#ff5c5c]' onClick={() => { delete_handle(task.id) }}><Trash /></span>
                                </div>
                            </div>
                        )

                    })}

                </div>


                <div className="add flex justify-center items-center  m-10">
                    <form className="flex-col justify-center items-center w-[50%] bg-[#f7ff65] rounded-md p-10" id="sign_form">
                        <label htmlFor="">Title :
                            <br />
                            < input className="h-10 w-[95%] bg-[#ffffff] p-3 mx-2 my-4 rounded-md" type="text"
                                id="name"
                                value={task_title}
                                onChange={(e) => { set_title(e.target.value) }}
                                required
                            />
                        </label>

                        <label htmlFor="">Description :
                            <br />
                            < input className="h-10 w-[95%] bg-[#ffffff] p-3 mx-2 my-4 rounded-md" type="text"
                                id="email"
                                value={task_desc}
                                onChange={(e) => { set_desc(e.target.value) }}
                                required

                            />
                        </label>

                        <div className=" w-[100%] flex justify-center items-center">
                            {!update_button
                                ? <button onClick={ handel_add} className="bg-[#ffffff] m-4 px-7 py-2 rounded-md text-[#000000] w-[50%] " type="submit">Add Task</button>
                                : <button onClick={() => { update_handle() }} className="bg-[#ffffff] m-4 px-7 py-2 rounded-md text-[#000000] w-[50%] " type="submit">Update Task</button>
                            }


                        </div>
                    </form>

                </div>




            </main>
        </>

    )
}


export default Home;