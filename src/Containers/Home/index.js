/* eslint react/prop-types: 0 */
import React from 'react';
import Welcome from 'src/Components/Welcome';
import Head from 'src/Components/Head';
import Translate from 'src/Components/Languages';

const Home = ({ match }) => {
  const { lang } = match.params;

  return (
    <React.Fragment>
      <Head title="Home page" />
      <Welcome message={Translate(lang, 'language.title')} />
    </React.Fragment>
  );
};

export default Home;
