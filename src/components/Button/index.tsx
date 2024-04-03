import { Button as AntButton } from "antd";
import styled from "styled-components";

// import { ButtonProps } from "antd";

// import styles from "./index.module.scss";

// export default function Button(props: ButtonProps) {
//   return <AntButton {...props}>{props.children}</AntButton>;
// }

type Props = {
  btnType: string;
  btnSize?: string;
  isRounded?: boolean;
};
const Button = styled(AntButton)`
  height: unset;
  padding: 8px 16px;
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

  ${(props) =>
    props.btnType === "secondary" &&
    `
  border: none;
  color: #ffffff;
  background-color: #a487db;
  border-radius: unset;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #a487db;
  }`}

  ${(props) =>
    props.isRounded &&
    `
    border-radius: 4px;
  `}
`;

export default Button;
