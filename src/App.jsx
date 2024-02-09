import './App.css'
import Button from "./components/Button/Button.jsx";
import Product from "./components/Product/Product.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Tile from "./components/Tile/Tile.jsx";
import brandImg from './assets/brand.png';
import ourStoryImg from './assets/our_story.png';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonType="button" name="to the collection"/>
                <Button buttonType="button" name="shop all bags"/>
                <Button buttonType="button" name="pre-orders" isDisabled/>
            </nav>
            <main>
                <Product
                    label="Best seller"
                    imgSrc={bag1}
                    name="The handy bag"
                    price="400"
                />
                <Product
                    label="Best seller"
                    imgSrc={bag2}
                    name="The stylish bag"
                    price="250"
                />
                <Product
                    label="New collection"
                    imgSrc={bag3}
                    name="The simple bag"
                    price="300"
                />
                <Product
                    label="New collection"
                    imgSrc={bag4}
                    name="The trendy bag"
                    price="150"
                />
            </main>
            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem corporis
                        doloremque, esse natus necessitatibus nostrum praesentium reiciendis rerum!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugit maiores, nam provident
                        quaerat quo!</p>
                </Tile>
                <Tile
                    imgSrc={brandImg}
                    imgAlt="Handbag brand image"
                />
                <Tile
                    imgSrc={ourStoryImg}
                    imgAlt="Our story image"
                />
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nihil, omnis? Architecto, atque blanditiis deserunt dignissimos eius modi quia quisquam quod ratione veritatis vero vitae, voluptatem. Accusantium aperiam at dolorem dolorum fuga, harum id nam necessitatibus officia, officiis rerum totam?</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
