import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

const Container = styled("div")`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    background-color: var(--mainColor);
    color: var(--textColor);
  }

  nav a {
    margin: 0 1rem;
    color: var(--textColor);
    text-decoration: none;
  }

  nav a:hover {
    color: var(--secondaryColor);
  }

  header .nav-btn {
    display: none;
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }

  header div,
  nav {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) {
    header .nav-btn {
      display: block;
      visibility: visible;
      opacity: 1;
    }

    header nav {
      position: fixed;
      top: -100vh;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: var(--mainColor);
      transition: 1s;
    }

    header .responsive_nav {
      transform: translateY(100vh);
    }

    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    nav a {
      font-size: 1.5rem;
    }
  }
`;

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Container>
      <header>
        <h3>S3LAP</h3>
        <nav ref={navRef}>
          <Link to="/">Trang chủ</Link>

          <Link to="/books-management">Quản lý sách</Link>
          <Link to="/sign-in">Đăng Nhập </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </Container>
  );
}

export default Navbar;
