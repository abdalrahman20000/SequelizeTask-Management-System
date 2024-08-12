
import { useState, sessionStorage } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Signup() {

    const navigate = useNavigate();

    const [name, set_name] = useState("");
    const [email, set_email] = useState("");
    const [pass, set_pass] = useState("");


    async function handel_signup(e) {
        e.preventDefault();

        try {
            // alert("error");
            // console.log( email , pass , name );
            const response = await axios.post('http://localhost:5000/db/tms/sign_up', { email , pass , name });
            localStorage.setItem("token", response.data.token);
            alert("Registeration successfully !!!");

            

            // navigate("/log-in");
        }
        catch (error) {
            // Log the error to the console for debugging
            console.error('Registration failed:', error);

            // Notify the user of the failure
            alert("Registration failed");
        }


        let user = {
            name: name,
            email: email,
            pass: pass
        };

        console.log(user);

        // sessionStorage.setItem("use_data", JSON.stringify(user));

        // alert("Signed successfully!!!");

        set_name("");
        set_email("");
        set_pass("");

        // sessionStorage.setItem("user", true);

        
    }

    return (
        <>
            <main className="h-[77vh] flex justify-center items-center">
                <form className="flex-col justify-center items-center w-[50%]" onSubmit={handel_signup} id="sign_form">
                    <label htmlFor="">Name :
                        <br />
                        < input className="h-10 w-[95%] bg-[#f7ff65] p-3 mx-2 my-4 rounded-md" type="text"
                            id="name"
                            value={name}
                            onChange={(e) => { set_name(e.target.value) }}
                            required
                        />
                    </label>

                    <label htmlFor="">Email :
                        <br />
                        < input className="h-10 w-[95%] bg-[#f7ff65] p-3 mx-2 my-4 rounded-md" type="email"
                            id="email"
                            value={email}
                            onChange={(e) => { set_email(e.target.value) }}
                            required

                        />
                    </label>

                    <label htmlFor="">Password :
                        <br />
                        < input className="h-10 w-[95%] bg-[#f7ff65] p-3 mx-2 my-4 rounded-md" type="password"
                            id="pass"
                            value={pass}
                            onChange={(e) => { set_pass(e.target.value) }}
                            required

                        />
                    </label>

                    <div className=" w-[90%] flex justify-center items-center">
                        <button className="bg-[#f7ff65] m-4 px-7 py-2 rounded-md text-[#000000] w-[50%] " type="submit">Sign up</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Signup;