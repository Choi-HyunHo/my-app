type Props = {
    params: {
        slug: string;
    };
};

const PostList = ({ params }: Props) => {
    return <h1>{params.slug} 페이지 입니다</h1>;
};

export default PostList;
