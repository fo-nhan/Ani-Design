import React from "react";
import { reState } from "../ui/ThemeProvider";

const useAniState = () => {
  const state = React.useContext(reState);

  return state;
};

export default useAniState;
