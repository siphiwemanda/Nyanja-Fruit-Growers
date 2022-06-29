import '../CSS/OurProduce.css'
import fruitTree from '../IMG/fruit-tree.png'
import fruitbox from '../IMG/organic-food.png'
import mangoes from "../IMG/mangos.jpg";
const OurProduce = ()  =>{
    return (
        <div className="OurProduce">
            <hr/>
            <h1>Our Produce</h1>
            <div className="OurProduceSection">
            <div className="Fresh">
                <img src={fruitTree}  width={86} height={86} alt="Fruit"/>
            <h2> Fresh</h2>
                <p> Nyanja Fruit growers produce a variety of fresh produce for the local market. Currently we specialise in mango (Tommy Atkins, and Kent as well as local varieties), as well as guava, oranges, ....., ....., .... etc
                    With support from (goverment, investors?) we aim to expand our production  in order to access markets further afield, both regionally and internationally.</p>
            </div>
            <div className="Processed">
                <img src={fruitbox}  width={86} height={86} alt="Fruit"/>
                <h2> Processed</h2>
                <p>Nyanja Fruit Growers are beginning to explore fruit processing as a way to add value to our product. Currently, we are drying mango using small scale solar driers. We are also producing honey as a bi-product.  Initial response iin the local markets has been positive and we plan to expand in this area of our business. Other products we are currently exploring include: dried banana chips, solar dried tomatoes, ......., ..... and .......... As with our fresh produce, our aim is to develop and expand into the regional and international markets.</p>
            </div>
            </div>
        </div>
    )
}

export default OurProduce;
