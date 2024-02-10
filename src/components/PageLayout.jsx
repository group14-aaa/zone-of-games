// Fonts
import '@fontsource/montserrat';

// Components
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from "./Footer";

document.documentElement.style.setProperty('--font-montserrat', 'montserrat, sans-serif');

const PageLayout = ({ children }) => {
    return (
        <div className={`font-montserrat relative`}>
            <Header />
            {children}
        </div>
    );
}

export default PageLayout;
