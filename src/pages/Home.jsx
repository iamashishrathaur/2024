import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomNavigation from "../Components/BottomNavigation";
import WeaklyIncome from "../Components/WeaklyIncome";
import SlideText from "../Components/SlideText";
import Promotion from "../Components/Promotion";
import UsesTools from "../Components/UsesTools";

const Home = () => {

      
  return (
   <>
    <div className="p-3 pt-5 bg-white pb-52">
       <WeaklyIncome/>
       <SlideText/>
       <Promotion/>
       <UsesTools/>

    </div>
    <BottomNavigation/>
   </>
  )
}

export default Home