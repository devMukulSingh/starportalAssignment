import AirdropsSection from './components/AirdropsSection';
import BasicsSection from './components/BasicsSection';
import CryptoDictionary from './components/CryptoDictionary';
import HomeSection from './components/HomeSection';
import LuckyDrawSection from './components/LuckyDrawSection';
import TopCryptoCreators from './components/TopCryptoCreators';

const AcademyPage = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <HomeSection />
      <BasicsSection />
      <AirdropsSection />

      <LuckyDrawSection />
      <hr className="w-full" />

      <TopCryptoCreators />
      <hr className="w-full" />

      <CryptoDictionary />
      <hr className="w-full" />
    </div>
  );
}

export default AcademyPage