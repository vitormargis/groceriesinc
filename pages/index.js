import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Autocomplete from '../components/Autocomplete/Autocomplete'

function Home({ options }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Groceries Inc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Autocomplete options={options} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pow ered by Groceries Inc
          <img src="/groceries.png" alt="Groceries logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${ process.env.baseUrl || 'http://localhost:3000' }/api/search`)
  const options = await res.json()
  return { props: { options } }
}

export default Home;