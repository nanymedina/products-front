import { ReactElement, ReactNode, useReducer, useContext, createContext } from 'react';
import Reducer from '@src/reducers/appReducer';
import initialState from './initialState';

const AppDispatchContext = createContext((params: any): any => params);
const AppStateContext = createContext(initialState);

interface IProvider {
  children: ReactNode;
}

const ConstextProvider = ({ children }: IProvider): ReactElement => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export const useStateApp = (): any => useContext(AppStateContext);
export const useDispatchApp = (): any => useContext(AppDispatchContext);
export default ConstextProvider;
