import { useSetRecoilState } from "recoil";
import { Flex, ThemeButton } from "../component";
import { themeAtom } from "../atom";
import { blueTheme, pinkTheme } from "../theme";

export default function Footer() {
  const setThemeState = useSetRecoilState(themeAtom);

  const handleClickToggleTheme = function () {
    setThemeState((current) => {
      switch (current.mode) {
        case "pinkTheme":
          return blueTheme;

        case "blueTheme":
          return pinkTheme;

        default:
          return pinkTheme;
      }
    });
  };

  return (
    <footer>
      <Flex>
        <ThemeButton onClick={handleClickToggleTheme}>Toggle</ThemeButton>
      </Flex>
    </footer>
  );
}
