import Image from "next/image";
import Link from "next/link";
import man from "../../../public/image/man.jpeg";

// export const revalidate = 0;

const Posts = async () => {
	// throw new Error();

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

			<div style={{ display: "flex" }}>
				<Image src={man} alt="man" priority />

				<Image
					src="https://images.unsplash.com/photo-1601464449408-4f7f6594c42e"
					alt="example"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Posts;
