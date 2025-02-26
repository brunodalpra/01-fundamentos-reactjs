import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/brunodalpra.png" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Rover Dal Prá</strong>
              <time title="08 de Fevereiro 2025 às 8:00h" dateTime="2025-02-08">Cerca de há 1h atrás</time>
            </div>
            <button title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  )

}