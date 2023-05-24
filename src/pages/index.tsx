import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Container from "@site/src/components/style/container";
import Button from "@site/src/components/style/button";
import Hero from '../components/hero';


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Kapgan Blog`}
            description="Siber Güvenliğin Öncüleri... <head />">
            <main>
                <Hero/>
                <Container>

                </Container>
            </main>
        </Layout>
    );
}
