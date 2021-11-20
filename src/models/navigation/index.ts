export type AppContextType = {
  signed: boolean;
  token: string;
  signOut: () => void;
  signIn: (email: string, password: string) => void;
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: undefined;
};
