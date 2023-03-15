
import styles from "./App.module.css";
import { FormNewTask } from "./components/FormNewTask";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <FormNewTask />
      </div>
    </div>
  );
}
