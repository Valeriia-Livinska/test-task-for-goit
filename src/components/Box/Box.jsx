import styled from "styled-components";
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
} from "styled-system";

const Box = styled("div")(
  {
    display: "flex",
  },
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);

export default Box;
