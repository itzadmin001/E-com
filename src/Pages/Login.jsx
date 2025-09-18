import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Main } from "../MainContext";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Reducers/UserSlice";

function Login() {
    const { notify } = useContext(Main)
    const user = useSelector(state => state.user.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [])


    const UserLoginHandler = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value.trim(),
            password: e.target.password.value.trim(),
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email || !emailRegex.test(data.email))
            return notify("Enter a valid email", "error");

        if (!data.password || data.password.length < 6)
            return notify("Password must be at least 6 characters", "error");

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            return notify("No user found. Please sign up first!", "error");
        }
        console.log(savedUser)

        if (
            savedUser.email === data.email &&
            savedUser.password === data.password

        ) {
            notify("Login successful 🎉", "success");
            dispatch(login(data));
            navigate("/")
        } else {
            return notify("Invalid email or password", "error");
        }

        e.target.reset();

    };


    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">

            {/* Left: Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 slide-in-left">
                <div className=" absolute top-5 left-10 cursor-pointer" onClick={() => navigate("/")}>
                    <FaCircleArrowLeft size={28} />
                </div>
                <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-gray-500 mb-6">Please enter your details.</p>

                <form className="w-full max-w-sm space-y-4" onSubmit={UserLoginHandler}>
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

                    {/* Options */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center space-x-1">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="text-blue-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black cursor-pointer text-white py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/sign-up" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 slide-in-right">
                <img
                    src="https://images.unsplash.com/photo-1523297467724-f6758d7124c5?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Login Illustration"
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

export default Login;
