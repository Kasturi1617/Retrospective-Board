"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import "./signInButton.css";

function SignInButton() {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <button onClick={() => signOut()}>
                sign out({session.user.name})
            </button>
        );
    }

    return (
        <div className="google-btn">
            <img className="google-logo" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo"></img>
            <button className="sign-in-google" onClick={() => signIn("google", { callbackUrl: "/daki"})}>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignInButton;