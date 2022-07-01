import mangoes from '../IMG/mangos.jpg'
const Header = () => {
    return (
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 bg-JustPurple">
            <div className="flex flex-col md-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-JustWhite"> Nyanja Fruit Growers</h1>
                <p className="max-w-sm text-center md:text-left text-JustWhite/75"> Based in Malawi, Nyanja Fruit Growers is an association of small holder farmers, growing fruit across the country. Formed in 2020, our aim is to ............. Combining our collective knowledge and experience, we are able to support each other and other farmers across the nation by .............. Our current mission is to ................. and our long term vision is to..................
                    We currently comprise of XX paid up members, but are open to developing and expanding our association. We are also interested in exploring investment opportunities with interested parties.
                    Our current Board is:
                    Chairman: Mr. Chopa Manda
                    Deputy Chair:
                    Treasurer:
                    Secretary:
                    Our association meets on a monthly basis.</p>
            </div>
            <div className="md:w-1/2">
                <img src={mangoes}  alt="Fruit"/>
            </div>
        </div>
    )
}
export default Header;
