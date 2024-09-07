interface FeaturedProductProps {
	ProductName: string;
	ProductPage: string;
	ProductDescription: string;
	ProductImage: string;
}

function FeaturedProduct({ ProductName, ProductPage, ProductDescription, ProductImage }: FeaturedProductProps) {
	return (
		<div onClick={() => (window.location.href = ProductPage)} className="feeturedProductItem">
			<img src={ProductImage} width="100%" height="100%" className="feeturedProductImg" />
			<h2>{ProductName}</h2>
			<p>{ProductDescription}</p>
		</div>
	);
}

export default FeaturedProduct;
