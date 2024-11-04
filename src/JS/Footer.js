import React from "react";

import '../CSS/Footer.css'; 

function Footer (){
    return(
        <div>
              <footer className="footer">
        <span>Sabor do Brasil</span>
        <div className="socialIcons">
            
          {/* <Instagram className="icon" size={20} />
          <Twitter className="icon" size={20} />
          <WhatsApp className="icon" size={20} />
          <Globe className="icon" size={20} /> */}
        </div>
        <span>Copyright - 2024</span>
      </footer>
    </div>




    );


}

export default Footer;