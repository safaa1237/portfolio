import styles from "./tag-list.module.css";
import { SkillIcon } from "./skill-icon";

export function TagList({ items, showIcons = false }: { items: string[]; showIcons?: boolean }) {
  return (
    <ul className={`${styles["tag-list"]} ${showIcons ? styles["skill-tags"] : ""}`}>
      {items.map((item) => (
        <li key={item}>{showIcons && <SkillIcon skill={item} />}<span>{item}</span></li>
      ))}
    </ul>
  );
}
