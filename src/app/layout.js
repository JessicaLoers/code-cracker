// https://the-guild.dev/blog/nextra-4?utm_source=nextra.site&utm_campaign=blog_page&utm_content=blog_link

import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Search, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import './globals.css';

export const metadata = {
  title: 'Code Cracker 🥠 - JavaScript Algorithm Playground',
  description:
    'An interactive platform for exploring, learning, and mastering JavaScript algorithms. Dive into practical examples, edit code, and crack the code with ease.',
  keywords: [
    'JavaScript',
    'Algorithms',
    'Interactive Learning',
    'Coding Playground',
    'Code Cracker',
  ],
  author: 'Jessica Lörs',
  openGraph: {
    title: 'Code Cracker 🥠',
    description:
      'Master JavaScript algorithms with hands-on examples in an interactive playground.',
    url: 'https://code-cracker-three.vercel.app/',
    siteName: 'Code Cracker',
    type: 'website',
  },
};

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  const theme = 'dark' || process.env.DEFAULT_THEME || 'light';

  const bannerMessages = [
    '🚧 This project is under construction 🚧',
    '🤞 More crackers coming soon! 🤞',
  ];
  const randomMessage = bannerMessages[Math.floor(Math.random() * bannerMessages.length)];
  // const banner = <Banner dismissible={false}>{randomMessage}</Banner>;

  const navbar = <Navbar logo={<b>Code Cracker 🥠</b>} logoLink="/" />;
  const footer = (
    <Footer>
      ©JLö, 2025 Year of the Cracker 🥠 – May your bugs be tiny and your insights mighty!
    </Footer>
  );
  const search = (
    <Search
      emptyResult="No fortune found. Try another one."
      searchOptions={{
        preload: false,
        verbose: true,
        filters: {},
        sort: {},
      }}
    />
  );

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={theme}
      style={{
        colorScheme: theme === 'dark' ? 'dark' : 'light',
      }}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Layout
          docsRepositoryBase="https://github.com/jessicaloers/code-cracker/tree/main/"
          darkMode={true}
          search={search}
          // banner={<div role="banner">{banner}</div>}
          navbar={navbar}
          pageMap={pageMap}
          footer={<div role="contentinfo">{footer}</div>}
          sidebar={{
            autoCollapse: true,
          }}>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
