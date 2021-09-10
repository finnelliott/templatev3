import React from 'react'
import { RichText } from 'prismic-reactjs'
import SimpleCentered from '../../components/cta/SimpleCentered'
import SimpleJustified from '../../components/cta/SimpleJustified'
import PanelWithScreenshot from '../../components/cta/PanelWithScreenshot'

const CallToAction = ({ slice }) => {

  if (slice.variation === "panelWithScreenshot") {
    const data = {
      "heading": slice.primary.heading,
      "description": slice.primary.description,
      "cta": {
        "text": slice.primary.callToActionLinkText,
        "href": slice.primary.callToActionLink?.url
      },
      "screenshot": slice.primary.screenshot?.url
    }
    return (
      <section>
        <PanelWithScreenshot heading={data.heading} description={data.description} cta={data.cta} screenshot={data.screenshot} />
      </section>
    )
  } else if (slice.variation === "default-slice") {
    const data = {
      "heading": slice.primary.heading,
      "description": slice.primary.description,
      "cta": {
        "text": slice.primary.callToActionLinkText,
        "href": slice.primary.callToActionLink?.url
      },
    }
    return (
      <section>
        <SimpleCentered heading={data.heading} description={data.description} cta={data.cta} />
      </section>
    )
  } else if (slice.variation === "simpleJustified") {
    const data = {
      "heading": slice.primary.heading,
      "description": slice.primary.description,
      "cta": {
        "text": slice.primary.callToActionLinkText,
        "href": slice.primary.callToActionLink?.url
      },
    }
    return (
      <section>
        <SimpleJustified heading={data.heading} description={data.description} cta={data.cta} />
      </section>
    )
  }
}

export default CallToAction