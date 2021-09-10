import info from "../../../data/info";
import Image from 'next/image'

export default function PrimaryNavigation({navigation}) {

    ////////////// Preparatory work and filters for finding correct slices

    const slices = navigation.data.body

    const isCta = (element) => element.slice_type === "call_to_action";
    const ctaIdx = slices.findIndex(isCta)

    const isLinks = (element) => element.slice_type === "navigation_links";
    const linksIdx = slices.findIndex(isLinks)


    ////////////// Useable resources

    //  Logo
    const logoUrl = navigation.data.logo.url
    const logoAlt = navigation.data.logo.alt

    //  Call to Action
    const ctaLink = slices[ctaIdx].primary.link.uid
    const ctaLinkText = slices[ctaIdx].primary.link_text

    //  Primary Page Links
    const links = slices[linksIdx].items.map((item) => {
        return ({href: item.link.uid, text: item.link_text}
        )  
    })



    return (
        <>
        <header className="bg-indigo-600">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                <div className="flex items-center">
                <a href={info.url}>
                    <span className="sr-only">{info.site_name}</span>
                    <div className="h-10 w-48 relative">
                    <Image
                        src={logoUrl}
                        alt={logoAlt}
                        layout="fill"
                        objectFit="scale-down"
                    />
                    </div>
                </a>
                <div className="hidden ml-10 space-x-8 lg:block">
                    {links.map((link) => (
                    <a key={link.text} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                        {link.text}
                    </a>
                    ))}
                </div>
                </div>
                <div className="ml-10 space-x-4">
                <a
                    href={ctaLink}
                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                    {ctaLinkText}
                </a>
                </div>
            </div>
            <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                {links.map((link) => (
                <a key={link.text} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.text}
                </a>
                ))}
            </div>
            </nav>
        </header>
        </>
    )
}



