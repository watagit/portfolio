import { styles } from "./style.css";

import { biography } from "~/data/biography";

export const ProfileHeading = () => {
  return (
    <div className={styles.container}>
      <h1>Wataru Ono</h1>
      <p className={styles.biography}>{biography}</p>
    </div>
  );
};
