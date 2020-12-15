import React from 'react';
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import './styles.module.scss';
import Footer from '../Footer/Footer';

interface PropsPage {
    children: React.ReactNode
}

const Layout = ({ children }: PropsPage) => (
    <div>
        <Head>
            <title>NextJs + Contentful Blog</title>
            <link rel="stylesheet" href="https://use.typekit.net/eop6wtq.css"></link>
        </Head>

        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;