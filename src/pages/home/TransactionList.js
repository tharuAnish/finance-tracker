import styles from "./Home.module.css"

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>Rs.{transaction.amount}</p>
        </li>
      ))}
    </ul>
  )
}
