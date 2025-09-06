function createStore<T>(initialState: T) {
  let state = initialState;

  return {
    // 取得目前的 state
    getState: () => state,
    // 更新 state
    setState: (newState: Partial<T>) => {
      state = { ...state, ...newState };
    },
  };
}

export default createStore;
