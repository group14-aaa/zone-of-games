// Fonts
import '@fontsource/montserrat';

// Components
import Header from "./Header";
import Sidebar from './Sidebar';

document.documentElement.style.setProperty('--font-montserrat', 'montserrat, sans-serif');

const PageLayout = ({ children }) => {
    return (
        <div className={`font-montserrat relative`}>
            <Header />
            <div className="grid grid-cols-4">
                <div className="bg-primary text-text h-full hidden md:block">
                    <Sidebar />
                </div>
                <div className="col-span-4 md:col-span-3 bg-primary text-text">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageLayout;
