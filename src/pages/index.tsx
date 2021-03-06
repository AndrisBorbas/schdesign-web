import Layout from 'components/Layout';
import Nav from 'components/placeholder/PlaceholderNav';
import React from 'react';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <div className="py-20">
        <h1 className="text-5xl text-center">Next.js + Tailwind CSS</h1>
      </div>
    </Layout>
  );
}
