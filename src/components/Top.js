import styled from "styled-components";
import {
  IoCartSharp,
  IoPersonCircleSharp,
  IoExitOutline,
} from "react-icons/io5";

export default function Top() {
  return (
    <Container>
      <div>
        <h1>moodboard</h1>
        <Icons>
          <button>
            <IoCartSharp />
          </button>
          <button>
            <IoPersonCircleSharp />
          </button>
          <button>
            <IoExitOutline />
          </button>
        </Icons>
      </div>
      <Gradient />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  background: #ffffff;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  div {
    weight: 100%;
    display: flex;
    align-items: center;
    h1 {
      font-size: 40px;
      font-weight: 700;
      color: #6cc4b1;
      text-align: center;
    }
  }
`;

const Icons = styled.div`
  width: 120px;
  position: absolute;
  right: 0;
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  button {
    width: 35px;
    height: 25px;
    display: flex;
    border: none;
    background: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

const Gradient = styled.div`
  width: 100vw;
  height: 10px;
  background: linear-gradient(90deg, #0cc0df 0%, #ffde59 100%);
  position: absolute;
  left: 0;
  bottom: 0;
`;
