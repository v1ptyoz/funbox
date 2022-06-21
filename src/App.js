import styles from './App.module.css';
import CardList from "./components/card-list/card-list";
import cards from "./cards.json"


function App() {
  return (
    <div className={styles.app}>
        <main className={styles.main}>
            <h2 className={styles.main__header}>Ты сегодня покормил кота?</h2>
            <CardList cards={cards}></CardList>
        </main>

    </div>
  );
}

export default App;
