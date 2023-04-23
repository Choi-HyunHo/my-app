import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "../components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-84 flex-col items-center justify-between p-24">
            <Counter />
        </main>
    );
}
