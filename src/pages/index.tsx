import React from 'react';
import { Redirect } from '@docusaurus/router';

function Home() {
  return <Redirect to="/docs/category/getting-started" />;
}

export default Home;