import style from "../layout.module.css";

export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className={style.header}>
                <a>apple</a>
                <a>banana</a>
            </div>
            {children}
        </>
    );
}
