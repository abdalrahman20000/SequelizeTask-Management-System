

// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Header() {

    // const signed = sessionStorage.getItem("signed");


    // const [is_signed, set_sign] = useState(signed);


    // useEffect((set_sign(signed)),[]);

    // const handle_sign = () => {

    //     sessionStorage.setItem("signed", false);
    //     set_sign(sessionStorage.getItem("signed"));


    // };

    // const handle_out = () => {

    //     sessionStorage.setItem("signed", true);
    //     set_sign(sessionStorage.getItem("signed"));


    // };

    // console.log(signed);
    return (
        <header className="flex justify-between items-center bg-[#f7ff65] h-[100px]">
            <div className="logo">
                {/* <img src="./library_-removebg-preview.png" alt="" /> */}
            </div>

            <nav>
                <ul>
                    <li>
                        <Link className="m-2 bg-[#ffffff] px-6 py-2 rounded-md" to="/">Home</Link>
                        <Link className="m-2 bg-[#ffffff] px-6 py-2 rounded-md" to="/sign-up">Sign up</Link>
                        <Link className="m-2 bg-[#ffffff] px-6 py-2 rounded-md" to="/log-in">Log in</Link>
                    </li>
                </ul>
            </nav>

            <div className="icons">
                {/* {signed && is_signed ? (<Link onClick={handle_sign} to="/signUp">Log out</Link>) : (<Link to="/signUp" onClick={handle_out}>Sign up</Link>)} */}
            </div>
        </header>
    )
}




export default Header;