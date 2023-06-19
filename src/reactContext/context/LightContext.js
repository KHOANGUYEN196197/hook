import { createContext, useState } from "react";

export const LightContext = createContext({});
export const LightProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const values = { toggle, handleToggle };

  return (
    <LightContext.Provider value={values}>{children}</LightContext.Provider>
  );
};
