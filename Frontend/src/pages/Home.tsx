import Background from "../components/Background.tsx";
import TextExo2Font from "../components/typography/TextExo2Font.tsx";
function Home() {
    return (
        <Background className="flex justify-center ">
            <div className="flex flex-col items-center justify-center w-10/12">
                <TextExo2Font className="font-bold" >Ofir Mikel</TextExo2Font>
                <TextExo2Font >Presentation Platform</TextExo2Font>
            </div>

        </Background>
    );
}

export default Home;