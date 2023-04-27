import { createContext, useState, Dispatch, SetStateAction } from "react";

interface ContextProps {
  user: string;
  data: any[];
  github: any[];
  setUser: (value: string | ((prevState: string) => string)) => void;
  setData: (value: any[] | ((prevState: any[]) => any[])) => void;
  setGithub: (value: any[] | ((prevState: any[]) => any[])) => void;
}

interface ExtendedContextProps extends ContextProps {
  setUser: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<any[]>>;
}

export const GlobalContext = createContext<ExtendedContextProps>({
  user: "",
  data: [],
  github: [],
  setUser: () => {},
  setData: () => {},
  setGithub: () => {},
});

export const GlobalProvider = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState<string>("");
  const [github, setGithub] = useState<any[]>([]);
  return (
    <GlobalContext.Provider
      value={{ user, data, github, setUser, setData, setGithub }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
