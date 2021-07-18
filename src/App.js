import './App.css';
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import LandingPage from "./components/home/LandingPage"

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <LandingPage />
        </div>
    );
}

export default App;
