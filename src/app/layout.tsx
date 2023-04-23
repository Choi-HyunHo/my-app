import "./globals.css";
import style from "./layout.module.css";

export const metadata = {
    title: "Create Next App | 바꿔보면 ?",
    description: "바꿨다",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {" "}
                <header className={style.header}>
                    <h1>Header</h1>
                    <div>
                        <a href="/posts" style={{ padding: "0 8px" }}>
                            posts
                        </a>
                        <a href="/products" style={{ padding: "0 8px" }}>
                            products
                        </a>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
