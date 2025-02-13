import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/brunodalpra.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Bruno Rover Dal Prá</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="08 de Fevereiro 2025 às 8:00h" dateTime="2025-02-08">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="http://">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="http://">#novoprojeto </a> <a href="http://">#nlw</a>{' '}
          <a href="http://">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
