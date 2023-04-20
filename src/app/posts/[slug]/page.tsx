type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Props) {
    // 경로를 파악하기 위해 params 를 props 로 받아옵니다.
    return {
        title: `동적으로 바꾸자 : ${params.slug}`,
    };
}

const PostList = ({ params }: Props) => {
    return <h1>{params.slug} 페이지 입니다</h1>;
};

export default PostList;
