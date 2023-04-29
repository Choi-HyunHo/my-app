import path from "path";
import { promises as fs } from "fs";

export type Products = {
    id: string;
    name: string;
    price: number;
};

export async function getProducts(): Promise<Products[]> {
    // path.join() 노드 함수 파일 경로 읽기
    const filePath = path.join(process.cwd(), "data", "products.json");
    console.log(filePath);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Products | undefined> {
    const products = await getProducts();

    return products.find((item) => item.id === id);
}
