import HeroSimpleCentered from '../../components/hero/HeroSimpleCentered'

export default function Hero({ slice }) {
  const heading = slice.primary.heading
  const subheading = slice.primary.subheading
  const cta1 = {
    "text": slice.items[0].ctaText,
    "link": slice.items[0].ctaLink.uid
  } 
  const cta2 = {
    "text": slice.items[1].ctaText,
    "link": slice.items[1].ctaLink.uid
  } 

  return (
    <section>
      <HeroSimpleCentered heading={heading} subheading={subheading} cta1={cta1} cta2={cta2} />
    </section>
  )
}
