import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!!session && (
          <a className={styles.card} onClick={() => signOut()}>
            <h2>Logout &rarr;</h2>
            <p>Logout from your account</p>
          </a>
        )}

        {!session && (
          <a className={styles.card} onClick={() => signIn("zitadel")}>
            <h2>Login &rarr;</h2>
            <p>Login with a ZITADEL account</p>
          </a>
        )}
      </main>
    </div>
  );
}
