import EarnerCertificate from "./EarnerCertificate";
import IntroToAirdrops from "./IntroToAirdrops";


const AirdropsSection = () => {
  return (
    <div className="
        flex
        w-full
        justify-center
        md:p-0
        p-5
    ">
        <div className="
        flex
        flex-col
        md:w-3/4 
        w-full

        ">
            <IntroToAirdrops/>
            <EarnerCertificate/>
        </div>
    </div>
  );
}

export default AirdropsSection