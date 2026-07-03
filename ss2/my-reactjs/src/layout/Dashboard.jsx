
import { Link, Outlet } from "react-router-dom";
import {NavLink} from "react-router-dom";

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100">

                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 bg-dark text-white p-3">

                    <h4 className="text-center mb-4">
                        Dashboard
                    </h4>

                    <div className="list-group">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `list-group-item list-group-item-action ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/dashboard/student"
                            className={({ isActive }) =>
                                `list-group-item list-group-item-action ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Student
                        </NavLink>

                        <NavLink
                            to="/dashboard/teacher"
                            className={({ isActive }) =>
                                `list-group-item list-group-item-action ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Teacher
                        </NavLink>

                    </div>

                </div>

                {/* Content */}
                <div className="col-md-9 col-lg-10 p-4">

                    <h3 className="mb-4">
                        Nội dung
                    </h3>
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;