/*
 *
 * HomePage
 *
 */

import React ,{memo} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Layout,BaseHeaderLayout,ContentLayout } from '@strapi/design-system';
const HomePage = () => {
    const [todoData, setTodoData] = React.useState([])
  return (
    // <div>
    //   <h1>{pluginId}&apos;s HomePage</h1>
    //   <p>Happy Strapi</p>
    // </div>
    // <Layout>
    //   <BaseHeaderLayout
    //     title="Todo Plugin"
    //     subtitle="All your todos in one place."
    //     as="h2"
    //     />
    //   <ContentLayout>
    //   <p>Happy Strapi Coding</p>
    // </ContentLayout>
    // </Layout>
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        <h1>Hello from our Todo Plugin</h1>
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
