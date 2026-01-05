import AskMyGuide from './components/AskMyGuide';
import FAQ from './components/FAQ';
import Hero from './components/Hero';
import Itinerary from './components/Itenary';
import LocalSecrets from './components/LocalSecrets';
import MapPreview from './components/MapPreview';
import Recommendations from './components/Recommendations';
import ThingsToDo from './components/ThingsToDo';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Navbar />
      <LocalSecrets />
      <ThingsToDo/>
      <Itinerary/>
      <div id="ask-section">
        <AskMyGuide />
      </div>
      <Recommendations />
      <MapPreview />
      <YouMayAlsoLike/>
      <FAQ/>
      <Footer/>
    </main>
  );
}

export default App;