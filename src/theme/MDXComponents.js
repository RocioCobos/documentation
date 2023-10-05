import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import GraphqlSample from "../components/GraphqlSample";
import BrowserWindow from "../components/BrowserWindow";
import TipContactCustomerCare from "../components/Admonitions/TipContactCustomerCare";

export default {
    // Re-use the default mapping
    ...MDXComponents,
    GraphqlSample,
    BrowserWindow,
    TipContactCustomerCare
};
