import { Fragment } from 'react'

import Meta from '@/components/Meta/Custom'
import LayoutArticle from '@/components/Layout/Default'
import { SITE_METADATA, OG_IMAGE_ABOUT, FEATURED_OSS, CAREERS } from '@/lib/constants'

export default function AboutPage() {
  return (
    <>
      <LayoutArticle>
        <Fragment>
          <Meta
            lang="id"
            title="ℹ️ About // inipanjie.netlify.app"
            description="About the Author of mazipan.space"
            url={`${SITE_METADATA.url}/about`}
            coverImage={`${OG_IMAGE_ABOUT}`}
          />
          <h2 className="mb-8 text-6xl md:text-7xl font-heading font-bold tracking-tighter leading-tight">
            ℹ️ About
          </h2>
          <div className="content">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tighter leading-tight">
              👋 Hi there, I am Panji Ariyo.
            </h2>
            <p>
             I'm passionate about learning languages, cultures, and linguistics. I'm also an amateur writer who loves to write about anything that interests me.
            </p>
            <br />
            <p>
             I'm a self-taught front-end developer and technical writer. I've published two books and several research papers. I'm always looking for new ways to learn and grow.
            </p>
            <br />
        </Fragment>
      </LayoutArticle>
    </>
  )
}
