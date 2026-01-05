import AskMyGuide from './components/AskMyGuide';
import Hero from './components/Hero';
import Itinerary from './components/Itenary';
import LocalSecrets from './components/LocalSecrets';
import MapPreview from './components/MapPreview';
import Recommendations from './components/Recommendations';
import Tabs from './components/Tabs';
import ThingsToDo from './components/ThingsToDo';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Tabs />
      <LocalSecrets />
      <ThingsToDo/>
      <Itinerary/>
      <AskMyGuide/>
      
      <Recommendations />
      <MapPreview />
      {/* Task 2.1 will go here */}
      <div className="h-screen bg-gray-50 p-10">
         <h2 className="text-2xl font-bold">Content starts here...</h2>
      </div>
    </main>
  );
}

export default App;