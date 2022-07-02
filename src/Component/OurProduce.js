import fruitTree from '../IMG/fruit-tree.png'
import fruitBox from '../IMG/organic-food.png'
import line from '../IMG/remove.png'
const OurProduce = ()  =>{
    return (
        <div className="container flex flex-col items-center px-6 mx-auto space-y-5 md:space-y-0 my-10">

            <div className="flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                <img  className="self-center" src ={line} width={50} height={50} alt="Line"/>
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Our Produce</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-12 md:space-y-0">
            <div className="flex flex-col space-x-0.5 space-y-0.5">
                <img className="self-center" src={fruitTree}  width={86} height={86} alt="Fruit"/>
                <h2 className="text-center text-lg text-JustPurple"> Fresh</h2>
                <p className="text-MattPurple"> Nyanja Fruit growers produce a variety of fresh produce for the local market. Currently we specialise in mango (Tommy Atkins, and Kent as well as local varieties), as well as guava, oranges, ....., ....., .... etc
                    With support from (goverment, investors?) we aim to expand our production  in order to access markets further afield, both regionally and internationally.</p>
            </div>
            <div className="flex flex-col space-x-0.5 space-y-0.5">
                <img className="self-center" src={fruitBox}  width={86} height={86} alt="Fruit"/>
                <h2 className="text-center text-lg text-JustPurple"> Processed</h2>
                <p className="text-MattPurple">Nyanja Fruit Growers are beginning to explore fruit processing as a way to add value to our product. Currently, we are drying mango using small scale solar driers. We are also producing honey as a bi-product.  Initial response iin the local markets has been positive and we plan to expand in this area of our business. Other products we are currently exploring include: dried banana chips, solar dried tomatoes, ......., ..... and .......... As with our fresh produce, our aim is to develop and expand into the regional and international markets.</p>
            </div>
            </div>
        </div>
    )
}

export default OurProduce;
