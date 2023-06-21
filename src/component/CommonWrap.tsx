import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const CommonWrap: FC<Props> = (props: Props) => {
  const { children, title } = props;
  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Typography sx={{ color: "green" }} variant="h6">
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default CommonWrap;
