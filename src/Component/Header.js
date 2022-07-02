import mangoes from '../IMG/mangos.jpg'
const Header = () => {
    return (
        <div className="bg-JustPurple overflow-hidden">
            <div
                className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-1 space-y-0 py-1.5 md:py-0 md:space-y-0">
                <div className="flex flex-col md-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-JustWhite"> Nyanja
                        Fruit Growers</h1>
                    <p>
                        <p className="max-w-sm text-center md:text-left text-JustWhite/75"> Based in Malawi, Nyanja Fruit Growers is an association of small holder farmers, growing fruit across the country. Formed
                            in
                            2020, our aim is to ............. Combining our collective knowledge and experience, we are
                            able
                            to support each other and other farmers across the nation by .............. Our current
                            mission
                            is to ................. and our long term vision is to..................
                            We currently comprise of XX paid up members, but are open to developing and expanding our
                            association. We are also interested in exploring investment opportunities with interested
                            parties.</p>
                        <p className="max-w-sm  leading-tight font-bold md:text-left text-JustWhite/75"> Our current Board is:</p>
                        <p className="max-w-sm  leading-tight font-bold md:text-left text-JustWhite/75">Chairman:<span className="font-normal">Mr. Chopa Manda</span></p>
                        <p className="max-w-sm leading-tight font-bold md:text-left text-JustWhite/75">Deputy Chair:</p>
                        <p className="max-w-sm  leading-tight font-bold md:text-left text-JustWhite/75">Treasurer:</p>
                        <p className="max-w-sm  leading-tight font-bold md:text-left text-JustWhite/75"> Secretary:</p>
                        <p className="max-w-sm  leading-tight font-bold md:text-left text-JustWhite/75">Our association meets on a monthly basis.</p>

                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={mangoes} alt="Fruit"/>
                </div>
            </div>
        </div>
    )
}
export default Header;
