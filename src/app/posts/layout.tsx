import style from "../layout.module.css";

export const metadata = {
    title: "여기는 Posts",
    description: "Posts",
};

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
