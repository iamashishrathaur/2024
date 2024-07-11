import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomNavigation from "../Components/BottomNavigation";
import WeaklyIncome from "../Components/WeaklyIncome";
import SlideText from "../Components/SlideText";

const Home = () => {

      
  return (
   <>
    <div className="p-3 pt-5">
       <WeaklyIncome/>
       <SlideText/>

    </div>
    <BottomNavigation/>
   </>
  )
}

export default Home