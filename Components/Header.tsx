"use client";
import "./Header.css";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    function handleUserClick() {
        console.log("clicked");
        setShowDropdown(!showDropdown);
    }

    function handleLogout()
    {
        signOut({ callbackUrl: "/sign-up" })
    }

    const { data: session } = useSession();
    return (
        <>
            <div className="header-body">
                {/* <header className="header-body"> */}
                <h1>Retrospect</h1>
                {session && (
                    <div className="header-user">
                        <img src={session.user?.image || "/default.png"} width={32} onClick={handleUserClick} />
                        <span>{session.user?.name}</span>
                        {showDropdown && <div className="header-dropdown">
                            <div className="dark-mode-container">
                                <button>Dark Mode</button>
                                <label className="switch">
                                    <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                                    <span className="slider"></span>
                                </label>

                            </div>
                            <button onClick={handleLogout}>Log out</button>
                        </div>}
                    </div>
                )}

                {/* </header> */}
            </div>

        </>
    )
}

export default Header;