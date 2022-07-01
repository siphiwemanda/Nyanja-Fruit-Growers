import line from '../IMG/remove.png'
const MemberSpotlight =() =>{
    return (
        <div className="container flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 my-10">

            <div className="flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                <img  className="self-center" src ={line} width={50} height={50} alt="Line"/>
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"> Member Spotlight </h1>
            </div>

            <div  className="flex-col">
            <h3 className="text-lg text-JustPurple"> Mr. Gred Automation</h3>
                <p className="text-MattPurple">
                    Congue lectus nec tellus parturient ipsum justo porta sollicitudin, ullamcorper eget ultricies lobortis venenatis et tempus sodales fusce litora porttitor velit lacinia nisl, ligula pretium. Ante vel scelerisque tempus posuere curae; hac cras sem tempus mi nullam mauris nulla sapien dis. Consectetuer odio consequat. Elit tristique arcu nisi ultricies purus parturient sem habitasse est feugiat feugiat dictum tempor ridiculus senectus ipsum potenti rutrum, rutrum ipsum ullamcorper eros laoreet ullamcorper, rutrum. Nisl ornare, tellus laoreet vulputate eget. Odio varius diam turpis dolor hac nam condimentum sociosqu platea sem et gravida fames, non montes tristique conubia. Torquent mus gravida interdum nulla Duis elementum sapien justo ad fames sollicitudin elementum felis velit habitant amet curabitur eros urna eu, venenatis luctus nec hymenaeos. Lacus odio lorem dictumst adipiscing..
                </p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default MemberSpotlight;
