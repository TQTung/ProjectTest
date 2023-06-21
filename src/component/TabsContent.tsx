import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

interface Props extends BoxProps {
  divider?: boolean;
}

const TabsContent = (props: Props) => {
  const { children, divider = true, ...rest } = props;
  return (
    <Box {...rest}>
      {divider && <Divider />}
      {children}
    </Box>
  );
};

export default TabsContent;
