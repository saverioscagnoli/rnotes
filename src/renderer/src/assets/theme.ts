import { ThemeComponentProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        bg: mode("whiteAlpha.900", "#252525")(props)
      }
    })
  }
});

export default theme;
