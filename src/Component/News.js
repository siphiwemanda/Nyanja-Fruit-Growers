import line from '../IMG/remove.png'
const CurrentNews =() =>{
    return (
        <div className="container flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 my-10">

            <div className="flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                <img  className="self-center" src ={line} width={50} height={50} alt="Line"/>
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"> Current News </h1>
            </div>

            <div  className="flex-col">
                <p className="text-MattPurple">
                    At the end of July, 15 members will be attending a training workshop in Lilongwe. The purpose of the training is .....
                </p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CurrentNews;
