import React from 'react';

const ExploreButton = ({
                           text = "Explore Projects",
                           href = "/partnerships",
                           variant = "primary",
                           className = "",
                           disabled = false
                       }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold inline-block no-underline transition-all duration-200";

    const variants = {
        primary: "bg-white text-blue-800 hover:bg-opacity-90 focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 active:bg-opacity-80",
        secondary: "bg-blue-800 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 active:bg-blue-900",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 focus:ring-2 focus:ring-white focus:ring-opacity-50 active:bg-opacity-90"
    };

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    const buttonStyles = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

    return (
        <button
            onClick={() => { if (!disabled)  window.location.href = href}}
            disabled={disabled}
            className={buttonStyles}
            role="button"
            aria-disabled={disabled}
        >
            {text}
        </button>
    );
};

export default ExploreButton;