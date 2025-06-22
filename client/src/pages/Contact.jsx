
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [userData, setUserData] = useState(true);
    const { user, API } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }


    // lets tackle our handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };


    // handle fomr getFormSubmissionInfo
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact)
            });
            if (response.ok) {
                const res_data = await response.json();
                console.log("res from server", res_data);
                toast.success("Message Submitted Successfully")
                setContact({
                    username: "",
                    email: "",
                    message: "",
                });

            }
            console.log(response);
        } catch (error) {
            toast.error("Message not sent")
            console.log("contact eroor", error);

        }
    };


    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>
                {/* contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="we are always ready to help" />
                    </div>

                    {/* contact form content actual  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997569040588!2d78.36621959614996!3d17.447773555753457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1745233454958!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
            </section>
        </>
    );
};
