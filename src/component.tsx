import styled from "styled-components";

interface IFlex {
  $bgcolor?: string;
  $width?: string;
  $justifyContent?: string;
  $margin?: string;
}

export const Flex = styled.div<IFlex>`
  margin: ${(props) => props.$margin || "0 20px"};
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "center"};
  background-color: ${(props) => props.$bgcolor || "inherit"};
  width: ${(props) => props.$width || "inherit"};
  color: ${(props) =>
    props.$bgcolor ? props.theme.bgcolors.secondary : "inherit"};
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: clamp(10px, 1vw, 20px) 0;
`;

interface ISection {
  $bgcolor?: string;
  $justifyContent?: string;
}

export const Section = styled.section<ISection>`
  background-color: ${(props) => props.$bgcolor || "inherit"};
  color: ${(props) =>
    props.$bgcolor ? props.theme.bgcolors.secondary : "inherit"};
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;

  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 20px;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow-x: hidden;
  .tab {
    width: 100%;

    background-color: ${(props) => props.theme.btncolor.main};
    button {
      width: 100%;
      display: block;
      padding: 20px 0;
    }
  }

  .space {
    width: 2%;
    background-color: inherit;
  }
`;

export const ThemeButton = styled.button`
  padding: 20px 10px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.btncolor.main};
`;

export const TodoForm1 = styled.form`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  color: black;
  input {
    margin: 0 auto;
    width: 80%;
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => props.theme.bgcolors.secondary};
    padding: 10px;
  }

  textarea {
    all: unset;
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
    padding-bottom: 30px;
    word-break: keep-all;
    overflow-x: hidden !important;

    line-height: 1.2;
    min-height: 40px;
    max-height: 100px;
    resize: none;
    border-bottom: 1px solid ${(props) => props.theme.bgcolors.secondary};
  }
  button {
    position: relative;
    z-index: 2;
    color: ${(props) => props.theme.colors.main};
    display: block;

    text-align: center;
    margin: 20px auto 0;
    padding: 13px 20px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.btncolor.main};
  }
`;

export const ErrorMessage = styled.div`
  &.show {
    height: 50px;
    opacity: 1;
    margin: 20px auto;
  }
  min-width: 40%;
  text-align: center;
  transition: all 0.3s ease-in-out;

  span {
    display: block;
    background-color: ${(props) => props.theme.bgcolors.point};
    color: ${(props) => props.theme.colors.main};
    padding: 20px;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &.hide {
    /* overflow: hidden; */
    margin: 0px auto;
    opacity: 0;
    height: 0;
  }
`;

export const FormUlBtn = styled.button<{ $selected?: boolean }>`
  background-color: ${(props) =>
    props.$selected
      ? props.theme.bgcolors.point
      : props.theme.btncolor.secondary};
`;

export const FormUl = styled.ul`
  min-height: 256.65px;
  padding: 30px 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    &:nth-of-type(2n + 1) {
      background-color: ${(props) => props.theme.colors.secondary};
    }
    .btn-box {
      margin-left: 20px;
      border-radius: ${(props) => props.theme.borderRadius};
      overflow: hidden;
      ${FormUlBtn} {
        padding: 3px 10px;
        color: ${(props) => props.theme.colors.main};

        &:nth-child(2) {
          margin: 0 2px;
        }
      }
    }
  }
`;
