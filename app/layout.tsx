import { Providers } from "./provider";
import Header from "@/Components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                
                <Providers>
                    <Header/>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
