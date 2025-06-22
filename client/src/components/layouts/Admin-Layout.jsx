import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { GrContact, GrServices } from "react-icons/gr";
import { useAuth } from "../../store/auth";


export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("admin Layout: ", user);

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }

    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/users"><FaUser /> Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contacts"><GrContact /> Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service"><GrServices /> Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"><FaHome /> Home</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
    </>;
};