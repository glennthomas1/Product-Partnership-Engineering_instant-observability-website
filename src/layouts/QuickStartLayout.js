import React, { useEffect, useState } from 'react';
import {
  GlobalHeader,
  GlobalFooter,
  NR_SITES,
} from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import '../components/styles.scss';
import { QUICKSTARTS_COLLAPSE_BREAKPOINT } from '../data/constants';
import '../components/fonts.scss';
import Layout from '../components/Layout';

const QuickStartLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader activeSite={NR_SITES.IO} />
      <Layout
        css={css`
          --sidebar-width: 0;
        `}
      >
        <Layout.Main
          css={css`
            min-height: 100vh;
            padding: 0;

            > * {
            }
          `}
        >
          {children}
        </Layout.Main>
      </Layout>
      <GlobalFooter
        css={css`
          max-width: 100% @media screen and
            (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
            margin-left: 0;
          }
        `}
      />
    </>
  );
};

QuickStartLayout.propTypes = {
  children: PropTypes.node,
};

export default QuickStartLayout;
