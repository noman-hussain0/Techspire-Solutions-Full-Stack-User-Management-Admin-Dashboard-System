import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS, API } = useAuth();

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {

            const response = await fetch(`${API}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login form", response);
            const res_data = await response.json();
            if (response.ok) {



                //strored the token in localhost
                storeTokenInLS(res_data.token);
                //localStorage.setItem("token", res_data.token);
                setUser({

                    email: "",
                    password: "",
                });
                toast.success("Login Successful");
                navigate("/");
            }
            else {

                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Invalid credentials");
            }

        } catch (error) {
            console.log("Login ", error);
        }

    }


    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container  grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img src="/images/login.png" alt="Login image"
                                    width="400"
                                    height="500"
                                />
                            </div>
                            {/* our main login code */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="text"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            placeholder="email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInput}
                                            placeholder="password"
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn submit">Login</button>

                                </form>
                            </div>

                        </div>

                    </div>
                </main>
            </section>
        </>
    );
};