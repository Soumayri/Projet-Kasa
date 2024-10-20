
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./appRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
