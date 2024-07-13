import styles from "./Styles/Header.module.css"

const Header:React.FC = () => {
  return (
    <article className={styles.article_header}>
      <header>
        <h1>React: Simple CURD Application</h1>
      </header>
    </article>
  )
}

export default Header
