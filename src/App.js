import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Naujienos from "./pages/naujienos/Naujienos";
import Paslaugos from "./pages/paslaugos/Paslaugos";
import Teisine from "./pages/teisine/Teisine";
import ApieMus from "./pages/apie-mus/ApieMus";
import Error from "./pages/404/Error";
import Footer from "./components/Footer";

export default function App() {
   return (
      <>
         <Header />
         <main>
            <Routes>
               <Route index path="/" element={<Home />} />
               <Route path="/naujienos" element={<Naujienos />} />
               <Route path="/paslaugos" element={<Paslaugos />} />
               <Route path="/teisine-informacija" element={<Teisine />} />
               <Route path="/apie-mus" element={<ApieMus />} />
               <Route path="*" element={<Error />} />
            </Routes>
         </main>
         <Footer />
      </>
   );
}