import PrimaryFooter from "../shared/footers/PrimaryFooter";
import PrimaryNavigation from "../shared/navigations/PrimaryNavigation";

export default function PrimaryLayout({ children, navigation, footer }) {
    return (
        <>
        <PrimaryNavigation navigation={navigation} />
        {children}
        <PrimaryFooter footer={footer} />
        </>
    )
}