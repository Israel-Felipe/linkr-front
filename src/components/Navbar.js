import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { IconContext } from "react-icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userImage } = useContext(UserContext);
  return (
    <Wrapper>
      <Link to = {"/timeline"}>
        <img src={logo} alt="logo" />
      </Link>
      <LogoutWrapper>
        <IconContext.Provider
          value={{ color: `white`, className: "menu-opener" }}
        >
          {!menuOpen ? (
            <BiChevronUp onClick={() => setMenuOpen(true)} />
          ) : (
            <BiChevronDown onClick={() => setMenuOpen(false)} />
          )}
          
          <img
            onClick={() => {
              if (!menuOpen) {
                setMenuOpen(true);
              } else {
                setMenuOpen(false);
              }
            }}
            src={userImage}
            alt=""
          />
        </IconContext.Provider>
        <LogoutBox isMenuOpen={!menuOpen}>
          <p onClick={() => alert("oi")}>Logout</p>
        </LogoutBox>
      </LogoutWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 68px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 2;

  img {
    width: 96px;
    height: 28px;
  }
`;

const LogoutWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90px;
  background-color: #151515;
  z-index: 2;

  .menu-opener {
    font-size: 34px;
    cursor: pointer;
    z-index: 2;
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    z-index: 2;
  }
`;

const LogoutBox = styled.div`
  position: absolute;
  top: 66px;
  right: -32px;
  height: 48px;
  width: 140px;
  background-color: #151515;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(${(props) => (props.isMenuOpen ? "-48px" : "0")});
  transition: all 0.75s ease-in-out;

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    margin: 0 6px 6px 0;
    display: ${(props) => (props.isMenuOpen ? "none" : "inherit")};
  }
`;
