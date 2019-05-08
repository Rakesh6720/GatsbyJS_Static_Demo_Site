import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'

export default ({data}) => (
    <Layout>
        <Title text='Welcome'/>
        <div>
            <Link to='/'>Home</Link> | <Link to='/about'>About Me</Link>
        </div>
        <p>
        Lorem ipsum dolor sit amet, gloriatur ullamcorper eu sit, no diam eius sadipscing eam. Mei integre splendide ei. An semper detraxit petentium vim, errem tincidunt ne per. Vix in mutat insolens consetetur, illum assueverit ne per. Mel democritum dissentias et, mea ne virtute aliquid, rationibus delicatissimi mel ei. Suscipit percipit.
        </p>
    </Layout>
)


