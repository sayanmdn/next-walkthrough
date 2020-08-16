import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A Computer Science Engineering Graduate with 5 years of experience in IT Services and management in an NGO.</p>
        <p>
          (This is a sample website - I'm building with help of{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p><Link href='/posts/first-post' > Go to first post</Link></p>
      </section>
    </Layout>
  )
}