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
  const recentPosts = getRecentPosts(5);

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
            <h1>Engineering leadership for the real world</h1>
            <p>
              I have spent 30 years building things for the web — first as a developer, then as a technical director, and now as a VP leading engineering and architecture at scale.
            </p>
            <p>
              These days I spend most of my time thinking about how teams actually work, why delivery systems fail, and why <strong>technology problems are almost never technology problems — they&apos;re almost always people, process, or time problems</strong>.
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
              Right now I am <Link to="/thinking">thinking hard</Link> about how AI changes engineering organisations beyond the tooling layer.
            </p>
            <p>
              That means looking at judgement, team structure, capability development, delivery pressure, and the uncomfortable fact that AI is moving faster than most organisations can adapt.
            </p>
            <p>
              The interesting question is not simply how teams can ship faster with AI. It is how they can move faster without becoming more fragile or creating the kind of low-trust, high-debt systems that come back to bite them 6 months later.
            </p>
            <p>
              We also need to consider the key leadership behaviours that either enable or undermine all of it.</p>
          </section>

          <section>
            <p>
              If you lead engineering teams, think about how software gets built and shipped, or are trying to understand what AI actually changes about your organisation, you&apos;re probably in the right place.
            </p>
          </section>

          <section>
            <h2>Start here</h2>
            <p>
              The best place to start is the <Link to="/thinking">Thinking</Link> page, which brings together the themes I keep coming back to: speed, quality, judgement, capability, AI, and time.
            </p>
          </section>

          <section>
            <h2>Recent blog posts</h2>
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
