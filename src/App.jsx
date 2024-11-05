import "./App.css";
import { Main } from "./Components/Main";

function App() {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center pb-4 gap-y-4">
      <Main />
      <div className="text-center py-10">
        Copyright &copy; 2024 Go GST Bill - Best GST Billing Software. All
        rights reserved.
      </div>
    </div>
  );
}

export default App;
