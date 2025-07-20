import React, { useEffect, useRef, useState } from 'react'


const placeholderTexts = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`,
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore',
    'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
];

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Rotate placeholder text every 3 seconds when input is focused and empty
    useEffect(() => {
        if (isFocused && inputValue === '') {
            const interval = setInterval(() => {
                setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isFocused, inputValue]);

    // Handle Tab key to auto-fill with placeholder
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab' && inputValue === '' && isFocused) {
            e.preventDefault();
            setInputValue(placeholderTexts[currentPlaceholderIndex]);
        } else if (e.key === 'Enter' && inputValue.trim()) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            setIsSubmitting(true);
            // Simulate submission
            setTimeout(() => {
                setIsSubmitting(false);
                setInputValue('');
                setIsFocused(false);
            }, 1000);
        }
    };

    return (
        <>
            {/* Interactive Input */}
            <div className="w-full max-w-[860px] min-h-[200px] h-auto mb-[68px] mt-8 mx-auto">
                <div className={`relative z-[9999] rounded-2xl min-h-[200px] h-auto transition-all duration-300 flex justify-center items-start pr-6 mt-6 ${isFocused
                    ? 'bg-[#212429] gradient-border'
                    : 'ring-1 ring-gray-700 bg-[#212429]'
                    }`}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
                        onKeyDown={handleKeyDown}
                        placeholder={`${isFocused ? '' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}`}
                        className="w-full bg-transparent text-white ibm-plex-sans font-normal text-[16px] leading-7 placeholder-gray-500 px-6 py-6 pr-20 rounded-2xl focus:outline-none h-full"
                    />

                    {/* Tab Hint */}
                    {isFocused && inputValue === '' && (
                        <div className="absolute left-6 top-[34px] transform -translate-y-1/2 flex items-center justify-center gap-2 pointer-events-none">
                            <span className="ibm-plex-sans font-normal text-[16px] leading-7 text-gray-500">
                                {placeholderTexts[currentPlaceholderIndex].replace('{img}', '')}
                            </span>
                            <img src="/tab_icon.svg" alt="" className="mr-2" />
                        </div>
                    )}

                    {/* Submit Button */}
                    {inputValue.trim() && (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="absolute right-6 bottom-4 transform -translate-y-1/2transition-all duration-200 flex items-center justify-center cursor-pointer"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (

                                <img src="/submit_btn.svg" alt="" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Input