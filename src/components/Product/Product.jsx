function Product({label, imgSrc, name, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={imgSrc} alt={name}/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;