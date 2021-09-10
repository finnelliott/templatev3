import Prismic from '@prismicio/client'
import Head from 'next/head'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import PrimaryLayout from '../components/layout/PrimaryLayout'
import resolver from '../sm-resolver' // import from project root
import info from '../data/info'

const Page = ({ primary_navigation, primary_footer, doc, slices, uid }) => (
  <>
  <Head>
    <title>{doc.data.meta_title}</title>
    <meta name="description" content={doc.data.meta_description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

    <meta property="og:url" content={`${info.url}/${uid}`} key="ogurl" />
    <meta property="og:image" content={doc.data.social_cards[0].social_card_image.url} key="ogimage" />
    <meta property="og:site_name" content={info.site_name} key="ogsitename" />
    <meta property="og:title" content={doc.data.meta_title} key="ogtitle" />
    <meta property="og:description" content={doc.data.meta_description} key="ogdesc" />

  </Head>
  <PrimaryLayout navigation={primary_navigation} footer={primary_footer} >
  <SliceZone
    slices={slices}
    resolver={resolver}
  />
  </PrimaryLayout>
  
  </>
)

export async function getStaticProps({
  params,
}) {
  const client = Prismic.client('https://templatev3.prismic.io/api/v2');
  const doc = (await client.getByUID('page', params.uid)) || {};
  const primary_navigation = (await client.getSingle('primary_navigation')) || {};
  const primary_footer = (await client.getSingle('primary_footer')) || {};
  const slices = doc.data.slices
  const uid = params.uid

  return {
    props: {
      primary_navigation,
      primary_footer,
      slices,
      doc,
      uid
    },
  };
}


export const getStaticPaths = useGetStaticPaths({
  client: Prismic.client('https://templatev3.prismic.io/api/v2'),
  type: 'page',
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid
      }
    }
  }
})

export default Page