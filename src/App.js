import './App.css';

function App() {
  return (
    <div className="App flex justify-center items-center h-screen">
      <div className='m-auto flex flex-col space-y-10'>
        <button className='text-2xl mx-2 bg-transparent hover:bg-violet-100 text-violet-400 py-3 px-10 rounded-md border-2 border-violet-200'> CUSTOMER </button>
        <button className='text-2xl mx-2 bg-transparent hover:bg-violet-100 text-violet-400 py-3 px-10 rounded-md border-2 border-violet-200'> CAFE STAFF </button>
      </div>
    </div>
  );
}

export default App;
