import { Link } from "@inertiajs/inertia-react";


const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-white border-b border-slate-900 mb-3">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    SoekadjanNews
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered bg-white"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content text-black rounded-box w-52 bg-white"
                    >
                        {!user ? 
                            <>
                                <li>
                                    <Link href={route('login')} as="button">Login</Link>
                                </li>
                                <li>
                                    <Link href={route('register')} as="button">Register</Link>
                                </li>
                            </>
                         : 
                            <>
                                <li>
                                    <Link href={route('dashboard')} as="button" className="justify-between">
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                  <Link>Setting</Link>
                                </li>
                                <li>
                                  <Link href={route('logout')} as="button" method="post">Logout</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
