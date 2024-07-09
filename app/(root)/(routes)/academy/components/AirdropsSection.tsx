import EarnerCertificate from "./EarnerCertificate";
import IntroToAirdrops from "./IntroToAirdrops";


const AirdropsSection = () => {
  return (
    <div className="
        flex
        w-full
        justify-center
        md:p-0
        px-5
        mt-20
        relative
    ">
        <div className="
        flex
        flex-col
        md:w-5/6
        w-full
        

        ">
            <IntroToAirdrops/>
            <EarnerCertificate/>
        </div>
    </div>
  );
}

export default AirdropsSection