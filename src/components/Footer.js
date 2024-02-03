import LocationSVG from "../assets/location.svg";
import PhoneSVG from "../assets/phone2.svg";
import EmailSVG from "../assets/email2.svg";
import "../assets/footer.scss";

export default function Footer() {
   return (
      <footer>
         <div className="top">
            <div className="content">
               <div className="description-container">
                  <h4>Globos Centras Šv. Gertrūda</h4>
                  <p>
                     Mūsų misija – Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
               </div>
               <address>
                  <h4>Kontaktai</h4>
                  <ul>
                     <li>
                        <div className="logo-wrap">
                           <img src={LocationSVG} alt="location logo" />
                        </div>
                        <div className="text-wrap">
                           <a
                              href="https://www.google.com/maps/search/?api=1&query=Garliava"
                              target="blank"
                           >
                              Kaunas, Garliava
                           </a>
                        </div>
                     </li>
                     <li>
                        <div className="logo-wrap">
                           <img src={PhoneSVG} alt="phone logo" />
                        </div>
                        <div className="text-wrap">
                           <a href="tel:+37061111111">+37061111111</a>
                        </div>
                     </li>
                     <li>
                        <div className="logo-wrap">
                           <img src={EmailSVG} alt="email logo" />
                        </div>
                        <div className="text-wrap">
                           <a href="mailto:narimantas@gcsg.lt">
                              narimantas@gcsg.lt
                           </a>
                        </div>
                     </li>
                  </ul>
               </address>
            </div>
         </div>
         <div className="bottom">
            <div className="content">
               <p>
                  Visos teisės saugomos &copy; 2024 m. Globos Centras Šv.
                  Gertrūda
               </p>
            </div>
         </div>
      </footer>
   );
}
