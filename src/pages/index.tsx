import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

type BlogTag = {
  label: string;
};

type BlogMetadataModule = {
  default?: BlogPostMetadata;
};

type BlogMetadataModuleContext = {
  keys: () => string[];
  (modulePath: string): BlogMetadataModule | BlogPostMetadata;
};

type RequireWithContext = NodeRequire & {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
  ) => BlogMetadataModuleContext;
};

function isBlogMetadataModule(
  module: BlogMetadataModule | BlogPostMetadata,
): module is BlogMetadataModule {
  return 'default' in module;
}

type BlogPostMetadata = {
  permalink: string;
  title: string;
  description?: string;
  date: string;
  tags?: BlogTag[];
  unlisted?: boolean;
};

function getRecentPosts(limit: number): BlogPostMetadata[] {
  const metadataModules = (require as RequireWithContext).context(
    '@generated/docusaurus-plugin-content-blog/default',
    false,
    /^\.\/site-blog-.*\.json$/,
  );

  const allPosts = metadataModules.keys().map((modulePath: string) => {
    const module = metadataModules(modulePath);
    return isBlogMetadataModule(module) ? (module.default as BlogPostMetadata) : module;
  });

  const uniquePosts = new Map<string, BlogPostMetadata>();

  allPosts.forEach((post: BlogPostMetadata) => {
    if (!uniquePosts.has(post.permalink)) {
      uniquePosts.set(post.permalink, post);
    }
  });

  return Array.from(uniquePosts.values())
    .filter((post) => !post.unlisted)
    .filter((post) => {
      const tags = post.tags ?? [];
      return !tags.some((tag) => tag.label.toLowerCase() === 'archived');
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Home(): React.ReactElement {
  const recentPosts = getRecentPosts(3);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Andy Hawkes',
    'url': 'https://www.andyhawkes.co.uk',
    'description': 'Personal website of Andy Hawkes: writing, projects, and current thinking on engineering, delivery, and AI.',
    'image': 'https://www.andyhawkes.co.uk/img/mugshot.jpg',
    'sameAs': [
      'https://github.com/andyhawkes',
      'https://linkedin.com/in/andyhawkes',
      'https://bsky.app/profile/andyhawkes.bsky.social',
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Head>
      <Layout
        title="Home"
        description="Personal website of Andy Hawkes: writing, projects, and current thinking on software engineering, delivery, and AI."
      >
        <main className="container margin-vert--lg home-main-content">
          <section>
            <h1>Some things from the mind of Andy Hawkes</h1>
            <p>
              I am a software engineering and product leader who has spent more than 30 years building things for the web and helping teams deliver useful products.
            </p>
            <p>
              This site is where I collect practical thinking, opinions, and side projects in one place.
            </p>
            <p>
              If you want the longer backstory, read more on the <Link to="/about">About me</Link> page.
            </p>
          </section>

          <section>
            <h2>Current focus</h2>
            <p>
              Right now I am focused on how teams can move faster with AI without creating technical debt, delivery friction, quality regressions, or fragile systems.
            </p>
            <p>
              I am also interested in the leadership side of that shift: clearer trade-offs, stronger engineering judgement, and better alignment between product intent and what gets shipped.
            </p>
          </section>

          <section>
            <h2>Recent thinking</h2>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.permalink} className="margin-bottom--md">
                  <h3 className="margin-bottom--xs">
                    <Link to={post.permalink}>{post.title}</Link>
                  </h3>
                  <p className="margin-bottom--xs">
                    <small>{formatDate(post.date)}</small>
                  </p>
                  {post.description ? <p>{post.description}</p> : null}
                </li>
              ))}
            </ul>
            <p>
              <Link to="/blog">Read all posts</Link>
            </p>
          </section>
        </main>
      </Layout>
    </>
  );
}
