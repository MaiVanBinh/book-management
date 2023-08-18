import { styled } from "styled-components";
import ListBooks from "../../components/ListBooks";

const BooksContainer = styled("div")`
  // display: flex;
  margin-top: 20px;
  padding: 0 40px;
  min-height: 750px;
`;

const BooksManagement = () => {
  console.log('BooksManagement');
  return <BooksContainer>
    <ListBooks />
  </BooksContainer>;
};

export default BooksManagement;
