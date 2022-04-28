import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  imgUrl?: string;
  description: JSX.Element;
  reverse?: boolean;
};

const FeatureList: FeatureItem[] = [
  // {
  //   title: translate({'message':'Application Centric'}),
  //   imgUrl: 'img/application-centric.svg',
  //   description: (
  //     <>
  //       <p>
  //         <Translate>
  //           KubeVela introduces Open Application Model (OAM) as the consistent yet higher level API to capture and render a full deployment of microservices on top of hybrid environments. Placement strategy, traffic shifting and rolling update are declared at application level. No infrastructure level concern, simply deploy.
  //         </Translate>
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: translate({'message':'Out of Box UI Console'}),
  //   imgUrl: 'img/extending-natively.svg',
  //   description: (
  //     <>
  //       <p>
  //         <Translate>
  //           KubeVela has an UI Console along with other out-of-box capabilities from a large catalog of addons. It models application delivery as DAG (Directed Acyclic Graph) and expresses it with CUE - a modern data configuration language. This allows you to design application deployment steps per needs and orchestrate them in programmable approach. No restrictions, natively extensible.
  //         </Translate>
  //       </p>
  //     </>
  //   ),
  //   reverse: true,
  // },
  // {
  //   title: translate({'message':'Infrastructure Agnostic'}),
  //   imgUrl: 'img/simple-yet-extensible-abstraction-mechanism.svg',
  //   description: (
  //     <>
  //       <p>
  //         <Translate>
  //           KubeVela works as an application
  //           delivery control plane that is fully decoupled from runtime
  //           infrastructure. It can deploy any
  //           workload types including containers, cloud services, databases,
  //           or even VM instances to any cloud or Kubernetes cluster, following the
  //           workflow designed by you.</Translate>
  //       </p>
  //     </>
  //   ),
  // },
];

function Feature({title, imgUrl, description, reverse}: FeatureItem) {
  return (
    <div className={clsx('row', styles.feature, reverse ? styles.featureReverse : '')}>
      <div className="col col--3">
        <div className="text--center">
          {imgUrl && <img className={styles.featureImage} src={useBaseUrl(imgUrl)} alt={title} />}
        </div>
      </div>
      <div className={clsx('col col--9', styles.featureDesc)}>
        <div>
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
