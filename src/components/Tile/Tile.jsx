function Tile({imgSrc, imgAlt, title, children}) {
    return (
        imgSrc ?
            <section>
                <img src={imgSrc} alt={imgAlt}/>
            </section>
            :
            <section>
                <h2>{title}</h2>
                {children}
            </section>
    )
}

export default Tile;