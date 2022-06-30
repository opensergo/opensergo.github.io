import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import GitHubButton from 'react-github-btn';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate>An open, language-agnostic cloud-native service governance specification</Translate>
        </p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            <Translate>Get Started</Translate>
          </Link> */}
          <GitHubButton
            href="https://github.com/opensergo/opensergo-specification"
            data-icon="octicon-mark-github"
            data-size="large"
            data-text='opensergo/opensergo-specification'
            title="opensergo/opensergo-specification"
            data-show-count="true"
            aria-label="Star opensergo/opensergo-specification on GitHub"/>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <WhatIs />

      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}

function WhatIs() {
  return (<div className={clsx('hero', styles.hero)}>
    <div className="container">
      <div className="row">
        <div className="col col--6">
          <h1><Translate>What is OpenSergo?</Translate></h1>
          <p className="hero__subtitle">
            <small>
              <Translate>
              OpenSergo is an open, language-agnostic cloud-native service governance specification that is close to business semantics.
              </Translate>

              <br />
              <br />
              <Translate>In the scenario of heterogeneous microservice system, DevOps can manage services in different languages and protocols with this unified specification.</Translate>
              <br />
            </small>
          </p>
        </div>
        <div className="col">
          <img
            className="image"
            src={useBaseUrl("img/opensergo-landscape-en.jpg")}
            alt="what is OpenSergo"
          />
        </div>
      </div>
    </div>
  </div>);
}