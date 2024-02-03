import Logo from "../../assets/logo.png";
import PhoneSVG from "../../assets/phone.svg";
import MapSVG from "../../assets/map.svg";
import EmailSVG from "../../assets/email.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
   return (
      <div>
         <header>
            <div className="info-container">
               <div className="logo-container">
                  <img src={Logo} alt="logo" />
                  <h1>Globos centras Šv Gertrūda</h1>
               </div>
               <address>
                  <ul>
                     <li>
                        <div className="logo-wrap">
                           <img src={PhoneSVG} alt="phone logo" />
                        </div>
                        <div className="info-wrap">
                           <span className="text">Telefonas</span>
                           <a href="tel:+37061111111">+37061111111</a>
                        </div>
                     </li>
                     <li>
                        <div className="logo-wrap">
                           <img src={MapSVG} alt="map logo" />
                        </div>
                        <div className="info-wrap">
                           <span className="text">Adresas</span>
                           <a href="https://www.google.com/maps/search/?api=1&query=Garliava">
                              Kaunas, Garliava
                           </a>
                        </div>
                     </li>
                     <li>
                        <div className="logo-wrap">
                           <img src={EmailSVG} alt="email logo" />
                        </div>
                        <div className="info-wrap">
                           <span className="text">El. paštas</span>
                           <a href="mailto:narimantas@gcsg.lt">
                              narimantas@gcsg.lt
                           </a>
                        </div>
                     </li>
                  </ul>
               </address>
            </div>
            <nav>
               <ul>
                  <li>
                     <NavLink to="/naujienos">Naujienos</NavLink>
                  </li>
                  <li>
                     <NavLink to="/apie-mus">Apie mus</NavLink>
                  </li>
                  <li>
                     <NavLink to="/teisine-informacija">Teisinė informacija</NavLink>
                  </li>
                  <li>
                     <NavLink to="/paslaugos">Paslaugos</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
}