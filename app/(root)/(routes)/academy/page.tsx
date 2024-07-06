import AirdropsSection from './components/AirdropsSection';
import BasicsSection from './components/BasicsSection';
import HomeSection from './components/HomeSection';
import LuckyDrawSection from './components/LuckyDrawSection';

const AcademyPage = () => {
  return (
    <div className='flex flex-col '>
      <HomeSection/>
      <BasicsSection/>
      <AirdropsSection/>
      <LuckyDrawSection/>
    </div>
  );
}

export default AcademyPage