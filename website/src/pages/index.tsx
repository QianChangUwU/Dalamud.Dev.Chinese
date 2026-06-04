import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            开始阅读文档
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: '📖 插件开发',
      description: '从零开始学习如何创建 Dalamud 插件，包括项目配置、API 使用和最佳实践。',
      link: '/docs/plugin-development/getting-started',
    },
    {
      title: '📦 发布插件',
      description: '了解如何将你的插件提交到官方仓库，包括审核流程、限制和政策。',
      link: '/docs/plugin-publishing/',
    },
    {
      title: '🔧 构建 Dalamud',
      description: '如果你想为 Dalamud 本身做贡献，请查看如何从源码构建。',
      link: '/docs/building-dalamud',
    },
    {
      title: '❓ 开发 FAQ',
      description: '常见问题解答，涵盖调试、逆向工程、插件迁移等主题。',
      link: '/docs/faq',
    },
    {
      title: '📋 版本与频道',
      description: '了解 Dalamud 的 API 版本、发布频道和各版本的新特性。',
      link: '/docs/versions-channels',
    },
    {
      title: '📰 新闻动态',
      description: '关注 Dalamud 的最新开发动态和公告。',
      link: '/blog',
    },
  ];

  return (
    <div className="container margin-vert--lg">
      <div className="row">
        {features.map((feature, idx) => (
          <div className="col col--4 margin-bottom--lg" key={idx}>
            <div className="card shadow--md">
              <div className="card__body">
                <Heading as="h3">{feature.title}</Heading>
                <p>{feature.description}</p>
                <Link to={feature.link} className="button button--primary button--sm">
                  查看详情
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'首页'}
      description="Dalamud 最终幻想 XIV 插件开发框架 - 中文开发文档">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
