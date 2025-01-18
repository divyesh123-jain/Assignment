
import ActivityBlock from './components/ActivityBlock';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import MemberShip from './components/MemberShip';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import Special from './components/Special';
function App() {


  return (
    <div className="min-h-screen w-full bg-[#f5ebe3]">
     <Navbar />
      <div className=''>
        <ActivityBlock />
      </div>

   <Hero />

   <Special />

      {/* Booking Section */}
    <Booking />

      {/* Membership Section */}
     <MemberShip />

      {/* Newsletter Section */}
     <NewsLetter />

      {/* Footer */}
  <Footer />    
    </div>
  );
}

export default App;

