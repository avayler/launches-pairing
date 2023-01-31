import React, { createContext, memo } from 'react';
import css from '../styles/grid.module.css';

export interface GridState {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export const Context = createContext<GridState>({
  activeId: null,
  setActiveId: () => {},
});

function SimpleGrid(props: { children: (state: GridState) => React.ReactNode }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const { children } = props;
  return (
    <div className={css.root}>
      <Context.Provider value={{ activeId, setActiveId }}>
        <Context.Consumer>{children}</Context.Consumer>
      </Context.Provider>
    </div>
  );
}

export default memo(SimpleGrid);
