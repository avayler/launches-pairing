import React, { createContext, memo, PropsWithChildren } from 'react';
import css from '../styles/grid.module.css';

interface GridState {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export const Context = createContext<GridState>({
  activeId: null,
  setActiveId: () => {},
});

function SimpleGrid(props: PropsWithChildren<{}>) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const { children } = props;
  return (
    <div className={css.root}>
      <Context.Provider value={{ activeId, setActiveId }}>{children}</Context.Provider>
    </div>
  );
}

export default memo(SimpleGrid);
