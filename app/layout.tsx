import { Providers } from "./provider";
import Header from "@/Components/Header";
import "./layout.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    <main className="page-body">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
