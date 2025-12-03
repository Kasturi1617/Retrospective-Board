import {withAuth} from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/sign-up",
    }
});

export const config = {
    matcher: [
        "/create/:path*",
        "/dashboard/:path*"
    ],
};