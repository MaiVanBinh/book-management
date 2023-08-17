import { styled } from "styled-components";

const FooterContainer = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  p {
    text-align: center;
  }
  background: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>©Mọi chi tiết xin liên hệ Admin website</p>

      <p>
        <i className="fas fa-phone"></i> 096760xxxx
      </p>
      <p>
        <i className="fas fa-envelope"></i> mvb1311176@gmail.com
      </p>
    </FooterContainer>
  );
};

export default Footer;
