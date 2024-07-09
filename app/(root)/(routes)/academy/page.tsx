import AirdropsSection from './components/AirdropsSection';
import BasicsSection from './components/BasicsSection';
import CryptoDictionary from './components/CryptoDictionary';
import HomeSection from './components/HomeSection';
import LuckyDrawSection from './components/LuckyDrawSection';
import TopCryptoCreators from './components/TopCryptoCreators';

const AcademyPage = () => {
  return (
    <div className='flex flex-col '>
      <HomeSection/>
      <BasicsSection/>
      <AirdropsSection/>
      <LuckyDrawSection/>
      <TopCryptoCreators/>
      <CryptoDictionary/>
    </div>
  );
}

export default AcademyPage