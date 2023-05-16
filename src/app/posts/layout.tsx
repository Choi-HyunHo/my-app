import style from "../layout.module.css";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

export const metadata = {
	title: "여기는 Posts",
	description: "Posts",
};

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });

// 나눔 고딕은 variable fonts 가 아닙니다!
const nanum = Nanum_Gothic({
	weight: "800",
	subsets: ["latin"],
});

export default function PostsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className={nanum.className}>
			<div className={style.header}>
				<a className={sans.className}>apple</a>
				<a className={inter.className}>banana</a>
			</div>
			{children}
		</main>
	);
}
