import React from "react";
import failedIcon from "../common/assets/icons/failed.svg";

const Failed: React.FC = () => {
    return (
        <div className="failed">
            <img src={failedIcon} className="failed__icon" alt="" />
        </div>
    );
};

export default Failed;
