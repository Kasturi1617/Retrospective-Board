"use client";
import "./Header.css";
import { useSession, signOut } from "next-auth/react";

function Header() {
    const { data: session } = useSession();
    return (
        <>
            <div className="header-body">
                {/* <header className="header-body"> */}
                    <h1>Reflect</h1>
                    {session && (
                        <div className="header-user">
                            <img src={session.user?.image || "/default.png"} width={32} />
                            <span>{session.user?.name}</span>
                        </div>
                    )}
                {/* </header> */}
            </div>
        </>
    )
}

export default Header;