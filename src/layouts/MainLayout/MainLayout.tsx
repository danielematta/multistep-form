import styles from "./MainLayout.module.css";
import { type ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
        {children}
    </div>
  );
};

export default MainLayout;
