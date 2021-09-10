import React from 'react'
import GridWithOffsetIcons from '../../components/features/GridWithOffsetIcons'
import CenteredGrid from '../../components/features/CenteredGrid'
import AlternatingWithTestimonial from '../../components/features/AlternatingWithTestimonial'

const Features = ({ slice }) => {

  if (slice.variation === "gridWithOffsetIcons") {
    const data = {
      "pretitle": slice.primary.pretitle,
      "heading": slice.primary.heading,
      "description": slice.primary.description,
      "features": slice.items.map((item)=>({"icon":item.feaureIcon?.url, "heading": item.featureHeading, "description": item.featureDescription}))
    }
    return (
      <section>
        <GridWithOffsetIcons pretitle={data.pretitle} heading={data.heading} description={data.description} features={data.features} />
      </section>
    )
  } else if (slice.variation === "default-slice") {
    const data = {
      "pretitle": slice.primary.pretitle,
      "heading": slice.primary.heading,
      "description": slice.primary.description,
      "features": [
        slice.items.map((item)=>({"icon":item.feaureIcon?.url, "heading": item.featureHeading, "description": item.featureDescription}))
      ]
    }
    return (
      <section>
        <CenteredGrid pretitle={data.pretitle} heading={data.heading} description={data.description} features={data.features} />
      </section>
    )
  } else if (slice.variation === "alternatingWithTestimonial") {
    const data = {
      "features": slice.items.map((item)=>({
          "icon":item.feaureIcon?.url, 
          "heading": item.featureHeading, 
          "description": item.featureDescription,
          "featureCTALink": item.featureCTALink,
          "featureCTAText": item.featureCTAText,
          "testimonialText": item.testimonialText,
          "testimonialAuthor": item.testimonialAuthor,
          "testimonialAuthorImage": item.testimonialAuthorImage?.url
        }))
    }
    return (
      <section>
        <AlternatingWithTestimonial features={data.features} />
      </section>
    )
  }

  

}
  
  

export default Features