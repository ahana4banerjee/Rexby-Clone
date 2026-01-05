import Hero from './components/Hero';
import Recommendations from './components/Recommendations';
import Tabs from './components/Tabs';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Tabs />
      <Recommendations />
      {/* Task 2.1 will go here */}
      <div className="h-screen bg-gray-50 p-10">
         <h2 className="text-2xl font-bold">Content starts here...</h2>
      </div>
    </main>
  );
}

export default App;