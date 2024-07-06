import EarnerCertificate from "./EarnerCertificate";
import IntroToAirdrops from "./IntroToAirdrops";


const AirdropsSection = () => {
  return (
    <div className="
        flex
        h-screen
        w-full
        items-center
        justify-center
        mt-20

    ">
        <div className="
        flex
        flex-col
        sm:w-3/4 
        w-full
        ">
            <IntroToAirdrops/>
            <EarnerCertificate/>
        </div>
    </div>
  );
}

export default AirdropsSection