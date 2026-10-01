import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducers/index";

const logger = createLogger();

const loadState = () => {
  try {
    const savedState = localStorage.getItem("redux-state");
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (error) {
    console.error("Failed to load state from localStorage", error);
    return undefined;
  }
};

export const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(logger)
);

store.subscribe(() => {
  try {
    localStorage.setItem("redux-state", JSON.stringify(store.getState()));
  } catch (error) {
    console.error("Failed to save state to localStorage", error);
  }
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;