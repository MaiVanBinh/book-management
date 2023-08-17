import styled from "styled-components";

const Conatainer = styled("div")`
  .app-header {
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80px;
  }

  .app-content {
    background-color: bisque;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 500px;
  }

  .app-footer {
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
  }
`;

function App() {
  return (
    <Conatainer>
      <header className="app-header">header</header>
      <div className="app-content">content</div>
      <div className="app-footer">Footer</div>
    </Conatainer>
  );
}

export default App;
