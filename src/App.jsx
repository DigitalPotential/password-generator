import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#14131b] to-[#08070b] min-h-screen min-w-full text-almost-white flex place-items-center">
      <div className="text-center w-11/12 mx-auto max-w-xs sm:max-w-sm">
        <h1 className="text-grey font-bold pb-4 text-2xl">Password Generator</h1>
        <PasswordGenerator />
        <div className="flex flex-col justify-center items-center mt-8">
        <img src="/images/techover-logo.png" alt="Techover-logo" className="w-64" />
        </div>
      </div>
    </div>
  );
};

export default App;