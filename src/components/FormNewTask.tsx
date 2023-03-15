import { PlusCircle } from "phosphor-react";
import styles from "./FormNewTask.module.css";

export function FormNewTask() {
  return (
    <form className={styles.formNewTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle weight="bold"/>
      </button>
    </form>
  );
}
