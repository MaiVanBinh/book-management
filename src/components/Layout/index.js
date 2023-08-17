import { styled } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LayoutContainer = styled("div")``;
const Layout = (props) => {
  return (
    <div style={{}}>
      <Navbar />

      <LayoutContainer>{props.children}</LayoutContainer>
      <Footer />
    </div>
  );
};

export default Layout;
