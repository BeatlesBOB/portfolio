import React from 'react';

const useDisableScroll = () => {


    const handleDisableScroll = React.useCallback(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    const handleEnableScroll = React.useCallback(() => {
        document.body.style.overflow = 'auto';
    }, []);


    return [handleDisableScroll, handleEnableScroll];
};

export default useDisableScroll;