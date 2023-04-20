import Link from "next/link";

const Posts = () => {
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
        </div>
    );
};

export default Posts;
