import Box from "@mui/material/Box";
import { FC, ReactNode } from "react";
import Header from "../component/Header";

interface Props {
  children: ReactNode;
}

const DefaultLayout: FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", width: "100%" }}>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
