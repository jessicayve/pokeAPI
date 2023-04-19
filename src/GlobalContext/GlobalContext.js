import { createContext } from "react";

export const GlobalContext = createContext()

const capitalizeFistLetter = (string) => {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
  }