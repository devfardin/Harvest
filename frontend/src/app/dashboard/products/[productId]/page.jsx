const DynamicProductPage = async ({ params }) => {
    const  {productId}  = await params;

    return <div>hello {productId}</div>;
};

export default DynamicProductPage;
