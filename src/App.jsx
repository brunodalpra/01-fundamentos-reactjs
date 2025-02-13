import { Header } from './components/header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
      <aside><Sidebar /></aside>
      <main>
      <Post
        author="Bruno Rover Dal Prá"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dignissimos facilis libero molestiae, voluptate, saepe necessitatibus officia obcaecati aspernatur eaque iusto eos laboriosam. Atque officia animi quasi, exercitationem nostrum quo!"
      />
      <Post author="Ana Livia" content="Escrevendo um post" />
      </main>

      </div>
    </div>
  );
}
