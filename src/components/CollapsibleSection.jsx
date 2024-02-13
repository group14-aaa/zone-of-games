import React, { useState } from 'react'

// Icons
import { FaPlus, FaMinus } from 'react-icons/fa';



const CollapsibleSection = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className="flex items-center cursor-pointer"
                onClick={handleToggleCollapse} >
                <h2 className="text-3xl font-bold mr-2">{title}</h2>
                {isCollapsed ? <FaPlus /> : <FaMinus />}
            </div>
            {!isCollapsed && children}
        </>
    );
};

export default CollapsibleSection;
