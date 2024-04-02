import { Button as AntButton } from "antd";
import styled from "styled-components";

type Props = {
  btnType: string;
  btnSize: string;
};

const Button = styled(AntButton)`
  display: flex;
  align-items: center;
  font-weight: 500;
  column-gap: 10px;
  font-size: 1.4rem;
  line-height: 1.25;
  text-transform: capitalize;
  transition: all 0.4s;
  height: 46px;
  justify-content: center;

  ${(props: Props) =>
    props.btnType === "primary" &&
    `
  border: 1px solid #000000;
  color: #000000;
  background-color: #ffffff;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }
  `}

  ${(props: Props) =>
    props.btnType === "secondary" &&
    `
  border: none;
  color: #ffffff;
  background-color: #151515;
  border-radius: unset;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #151515;
  }`}

  ${(props: Props) =>
    props.btnSize === "sm-btn" &&
    `
  width: 146px;
  `}

  ${(props: Props) =>
    props.btnSize === "md-btn" &&
    `
  width: 166px;
  `}

  ${(props: Props) =>
    props.btnSize === "full-btn" &&
    `
  width: 100%;
  `}
`;

export default Button;
