import { createContext, useState, Dispatch, SetStateAction } from "react";

interface ContextProps {
  user: string;
  data: any[];
  setUser: (value: string | ((prevState: string) => string)) => void;
  setData: (value: any[] | ((prevState: any[]) => any[])) => void;
}

interface ExtendedContextProps extends ContextProps {
  setUser: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<any[]>>;
}

export const GlobalContext = createContext<ExtendedContextProps>({
  user: "",
  data: [],
  setUser: () => {},
  setData: () => {},
});

export const GlobalProvider = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState<string>("");
  return (
    <GlobalContext.Provider value={{ user, data, setUser, setData }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
