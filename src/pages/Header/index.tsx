import ReactSwitch from "react-switch";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { shade } from "polished";

interface IProps {
  toggleTheme(): void;
}
export function Header({ toggleTheme }: IProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div className="logo">logo</div>
      <div className="logo">
        <ReactSwitch
          onChange={toggleTheme}
          checked={title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={shade(0.2, colors.secondary)}
        />
      </div>
    </Container>
  );
}
