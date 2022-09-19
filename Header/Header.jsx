import React from "react";
import "./Header.css";
import Logo from "./images/Logo.png";
import Coin from "./images/coin.png";
import Copporatedeals from "./images/corporate.png";
import Customized from "./images/Customixed-coins.png";
import Digitalgold from "./images/DigitalGold.png";
import aboutus from "./images/about-us.png";
import Contactus from "./images/Contact-us.png";
import Cart from "./images/cart.png";
import Bookmark from "./images/bookmark.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function Header(){
  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo">
          {" "}
          <img src={Logo} alt="" />
        </div>
        <div className="item2">
          <div>
            <TextField
              className="textfield"
              id="outlined-basic"
              placeholder="What are you looking for today?"
              variant="outlined"
            />
          </div>
          <img src={Cart} alt="" style={{ justifySelf: "flex-end" }} />
          <img src={Bookmark} style={{ justifySelf: "flex-end" }} />
        </div>
        <div className="item3">
          <Button
            sx={{
              backgroundColor: "white",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Coin} alt="" />}
          >
            <Typography variant="h5" className="buttonnames secondarycolor">
              Buy coins
            </Typography>
          </Button>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Customized} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Customized Coins
            </Typography>
          </Button>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Copporatedeals} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Corporate Deals
            </Typography>
          </Button>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Digitalgold} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Digital gold
            </Typography>
          </Button>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={aboutus} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              About Us
            </Typography>
          </Button>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Contactus} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Contact Us
            </Typography>
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF5C53",
              width: "200px",
              height: "60px",
              textTransform: "capitalize",
            }}
            className="button loginbtn"
          >
            <Typography variant="h5" className="buttonnames loginbtncolor">
              Login
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;