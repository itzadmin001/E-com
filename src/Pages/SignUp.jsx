import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Main } from "../MainContext";
import { useDispatch, useSelector } from "react-redux";
import { SignupUser } from "../Reducers/UserSlice";


function Signup() {
    const { notify } = useContext(Main)
    const user = useSelector(state => state.user.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()





    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [])



    const UserSignUphandler = (e) => {
        e.preventDefault();
        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        if (!data.firstname.trim() || data.firstname.length < 2)
            return notify("First name is required (min 2 chars)", "error");

        if (!data.lastname.trim() || data.lastname.length < 2)
            return notify("Last name is required (min 2 chars)", "error");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.trim() || !emailRegex.test(data.email))
            return notify("Enter a valid email", "error");

        if (data.password.length < 6)
            return notify("Password must be at least 6 characters", "error");

        notify("Account created successfully 🎉", "success");

        dispatch(SignupUser(data))
        e.target.reset()

    };





    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 slide-in-left">
                <img
                    src="https://images.unsplash.com/photo-1732475530155-90158f3b5f79?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Signup Illustration"
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 slide-in-right">
                <div className=" absolute top-5 right-10 cursor-pointer" onClick={() => navigate("/")}>
                    <FaArrowCircleRight size={28} />
                </div>
                <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
                <p className="text-gray-500 mb-6">Join us and explore the features.</p>

                <form className="w-full max-w-sm space-y-4" onSubmit={UserSignUphandler}>
                    {/* Name */}
                    <div className="flex items-center border rounded-lg p-2">
                        <MdPerson className="text-gray-500 mr-2 text-xl" />
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            name="firstname"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div>
                    <div className="flex items-center border rounded-lg p-2">
                        <MdPerson className="text-gray-500 mr-2 text-xl" />
                        <input
                            type="text"
                            placeholder="last Name"
                            required
                            name="lastname"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border rounded-lg p-2">
                        <MdEmail className="text-gray-500 mr-2 text-xl" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            name="email"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border rounded-lg p-2">
                        <MdLock className="text-gray-500 mr-2 text-xl" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            name="password"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 shadow-lg cursor-pointer  rounded-lg hover:bg-gray-900 duration-300 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
