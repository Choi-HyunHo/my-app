import { getProducts } from "@/service/products";
import Link from "next/link";

const Products = async () => {
    // 서버에 있는 제품의 리스트를 읽어옴
    const products = await getProducts();

    return (
        <>
            <div>이곳은 Products 페이지 입니다</div>
            <ul>
                {products.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            ;
        </>
    );
};

export default Products;
