import React from 'react'
import styles from './404.module.scss';
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
    <Layout>
    <div className={styles.content}>
        <h1 className={styles.header}>Page not found</h1>
        <p className={styles.errorMessage}>
            Lorem ipsum dolor sit amet, ex sit facete.
        </p>
        <Link to='/'>Home</Link>
    </div>
    </Layout>
)