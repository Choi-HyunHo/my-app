import Link from "next/link";

// export const revalidate = 0;

const Posts = async () => {
    const res = await fetch("https://api.adviceslip.com/advice", {});
    const data = await res.json();
    const randomText = data.slip.advice;

    return (
        <div>
            <ul>
                <li>
                    <Link href="/posts/apple">apple</Link>
                </li>
                <li>
                    <Link href="/posts/banana">banana</Link>
                </li>
                <li>
                    <Link href="/posts/lemon">lemon</Link>
                </li>
            </ul>

            <span>{randomText}</span>
        </div>
    );
};

export default Posts;
