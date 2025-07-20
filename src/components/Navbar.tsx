const Navbar = () => {
    return (
        <nav className=' border-b border-solid border-[#363636]'>
            <span className='container mx-auto w-full h-auto py-[18px] flex justify-between items-center'>
                <span className='flex justify-between items-center gap-10'>
                    <img src='/everflow_logo.svg' />
                    <ul className='menu-items flex gap-[4px]'>
                        <li className='flex gap-[8px] py-[6px] px-[12px]'>
                            <p className='ibm-plex-sans font-bold text-white'>Platform</p>
                            <img src='/caret-down.svg' />
                        </li>
                        <li className='flex gap-[8px] py-[6px] px-[12px]'>
                            <p className='ibm-plex-sans font-bold text-white'>Product</p>
                            <img src='/caret-down.svg' />
                        </li>
                        <li className='flex gap-[8px] py-[6px] px-[12px]'>
                            <p className='ibm-plex-sans font-bold text-white'>Pricing</p>
                            <img src='/caret-down.svg' />
                        </li>
                        <li className='flex gap-[8px] py-[6px] px-[12px]'>
                            <p className='ibm-plex-sans font-bold text-white'>Company</p>
                            <img src='/caret-down.svg' />
                        </li>
                        <li className='flex gap-[8px] py-[6px] px-[12px]'>
                            <p className='ibm-plex-sans font-bold text-white'>Resources</p>
                            <img src='/caret-down.svg' />
                        </li>
                    </ul>
                </span>
                <span className='flex justify-between items-center gap-2'>
                    <a href="www.google.com/login" className='ibm-plex-sans font-bold text-white'>
                        Login
                    </a>
                    <button className='flex gap-2 justify-between items-center py-2.5 px-5 rounded-2xl bg-[#1E2226] border border-[#4A6DD966]'>
                        <p className='ibm-plex-sans font-bold text-white'>Try for free</p>
                        <img src='/arrow-upright.svg' />
                    </button>
                </span>
            </span>
        </nav>
    )
}

export default Navbar