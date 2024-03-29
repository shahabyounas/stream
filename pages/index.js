import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import landingImg from '../public/landing-img.png'
import locale from '../locales/en'

export default function Home() {
  const menus = [
    { name: "Log In" },
    { name: "Create an event" },
    { name: "Help Center" },
    { name: "Pricing" },
    { name: "Discover" },
  ]

  const buttons = [
    { name: "Create an event", selected: true },
    { name: "Log In", selected: false },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <nav className="d-flex justify-content-around align-items-center mt-5">
          <div>
            <Image src={logo} alt="stream logo" />
          </div>
          <ul className="d-flex align-items-center">
            {menus.reverse().map((menu, index) => <li className={styles.list} key={index.toString()}>
              <Link href="/posts/post">
                <a>{menu.name}</a>
              </Link>
            </li>
            )}
          </ul>
        </nav>

        <article className={`${styles.contentMain}`}>
          <article className={`${styles.contentBlock}`}>
            <section className={styles.leftContent}>
              <h2> One-on-One </h2>
              <h2> Creator events </h2>

              <div className="mt-4">
                <p>{locale['meet-stream']}</p>
                <p>{locale['hello-event']}</p>
              </div>

              <div className="d-flex mt-4">
                {
                  buttons.map((button, index) =>
                    <button
                      className={button.selected ? styles.btn : `${styles.rmBtnBg} mx-4`}
                      key={index.toString()}>
                      {button.name}
                    </button>
                  )}
              </div>
            </section>

            <section className={`${styles.rightContent} mt-3`}>
              <div>
                <Image src={landingImg} alt="landing img" />
              </div>
            </section>
          </article>
        </article>

      </main>
    </div>
  )
}
