import React from 'react'
import CTASimpleCentered from '../../components/cta/CTASimpleCentered'
import CTASimpleJustified from '../../components/cta/CTASimpleJustified'
import CTAPanelWithScreenshot from '../../components/cta/CTAPanelWithScreenshot'

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
        <CTAPanelWithScreenshot heading={data.heading} description={data.description} cta={data.cta} screenshot={data.screenshot} />
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
        <CTASimpleCentered heading={data.heading} description={data.description} cta={data.cta} />
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
        <CTASimpleJustified heading={data.heading} description={data.description} cta={data.cta} />
      </section>
    )
  }
}

export default CallToAction