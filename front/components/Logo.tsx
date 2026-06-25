import React from 'react';
import Image from 'next/image'

const Logo = () => {
    return (
        <div className="flex items-center gap-x-1">
            <span className='hidden md:inline text-paragraph font-secondary font-extrabold'>ALLARD</span>
            <Image alt='Logo with Loppo (Cat mascotte)' src="/loppo/icon/allard_icon_deepmoss.svg" width={40} height={40} />
        </div>
    );
};

export default Logo;