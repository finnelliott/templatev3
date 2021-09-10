import React from 'react';
import Prismic from '@prismicio/client';
import Link from 'next/link';
import {
  apiEndpoint,
  accessToken,
  hrefResolver,
} from '../prismic-configuration';

// Helper function to get the Prismic repository name from the URL
export const [, prismicRepoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content) => (
  <Link
    key={element.data.id}
    href={hrefResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

// Client method to query documents from the Prismic repo

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};


export const manageLocal = (Locales, locale) => {
  // Languages from API response
// // Setting Master language as default language option
const mainLanguage = Locales[0];
// // Sets current language based on the locale
const currentLang = locale !== undefined ? locale : mainLanguage;
const isMyMainLanguage = mainLanguage === currentLang;

return { mainLanguage, currentLang, isMyMainLanguage }
}


import { RichText, Elements } from 'prismic-reactjs';

// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
export const htmlSerializer = function(type, element, content, children, key) {

  var props = {};
  switch(type) {

    // Add a class to paragraph elements
    case Elements.paragraph:
      props = {className: 'font-light text-lg text-black py-2 w-full'};
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    case Elements.heading1:
      props = {className: 'font-light text-3xl text-black py-2 w-full'};
      return React.createElement('h1', propsWithUniqueKey(props, key), children);  

    case Elements.heading2:
      props = {className: 'font-light text-2xl text-black py-2 w-full'};
      return React.createElement('h2', propsWithUniqueKey(props, key), children); 

    case Elements.heading3:
      props = {className: 'font-light text-xl text-black py-2 w-full'};
      return React.createElement('h3', propsWithUniqueKey(props, key), children);

    case Elements.heading4:
      props = {className: 'font-light text-lg text-black py-2 w-full'};
      return React.createElement('h4', propsWithUniqueKey(props, key), children);  

    case Elements.heading5:
      props = {className: 'font-light text-lg text-black py-2 w-full uppercase'};
      return React.createElement('h5', propsWithUniqueKey(props, key), children); 

    case Elements.heading6:
      props = {className: 'font-light text-base text-black py-2 w-full uppercase'};
      return React.createElement('h6', propsWithUniqueKey(props, key), children); 

    // Don't wrap images in a <p> tag
    case Elements.image: 
      props = { src: element.url , alt: element.alt || '', className: "w-full py-4" };
      return React.createElement('img', propsWithUniqueKey(props, key));

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign({
        className: 'text-brand-zero underline w-full',
        href: element.data.url || linkResolver(element.data)
      }, targetAttr, relAttr);
      return React.createElement('a', propsWithUniqueKey(props, key), children);

    // Return null to stick with the default behavior
    default: 
      return null;
  }
};