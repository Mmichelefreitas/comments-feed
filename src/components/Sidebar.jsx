import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/76696260?v=4"
        />
        <strong>Michele Freitas</strong>
        <span>Photographer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={18} />
          Editar o seu Perfil
        </a>
      </footer>
    </aside>
  );
}
