export default function PrimaryFooter({ footer }) {

    ////////////// Preparatory work and filters for finding correct slices

    const slices = footer.data.body

    ////////////// Useable resources

    //  Logo
    const logoUrl = footer.data.logo.url
    const logoAlt = footer.data.logo.alt

    //  Tagline
    const tagline = footer.data.tagline

    //  Copyright
    const copyright = footer.data.copyright

    // Columns of links
    const columns = slices.map((items) => {
        if (items.slice_type === 'link_column') {
            return {
                "column_heading": items.primary.column_heading,
                "links": items.items.map((item) => {return({"link": item.link.uid, "linkText": item.link_text})})
            }
        }
    })

    return (
        <>
        </>
    )
}