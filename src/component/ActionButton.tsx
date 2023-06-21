import type { IconButtonProps } from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { svgIconClasses } from "@mui/material/SvgIcon";

const ActionButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.divider,
  marginRight: theme.spacing(0.75),
  fontSize: 20,
  "&:hover": {
    borderColor: theme.palette.action.disabled,
    backgroundColor: "transparent",
  },
  [`& .${svgIconClasses.root}`]: {
    fontSize: "1rem",
  },
}));

export default ActionButton;
