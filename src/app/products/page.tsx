import { getProducts } from "@/service/products";
import Link from "next/link";

const Products = () => {
    // 서버에 있는 제품의 리스트를 읽어옴
    const products = getProducts();

    return (
        <>
            <div>이곳은 Products 페이지 입니다</div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product}`}>{product}</Link>
                    </li>
                ))}
            </ul>
            ;
        </>
    );
};

export default Products;
