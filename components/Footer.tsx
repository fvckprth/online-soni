function Footer() {
    return (
        <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center py-2 md:py-0'>
            {/* First Division */}
            <div className='flex flex-row gap-12 text-xs md:text-base mb-6 md:mb-0'>
                <p className='leading-4 tracking-tight'>
                    INSTAGRAM<br/>
                    <a href='https://www.instagram.com/onlinesoni/' className='underline underline-offset-4 decoration-from-font hover:opacity-25'>@onlinesoni</a>
                </p>
                <p className="leading-4 tracking-tight">
                    INQUIRIES<br/>
                    <a href='mailto:contact@onlinesoni.com' className='underline underline-offset-4 decoration-from-font hover:opacity-25'>contact@onlinesoni.com</a>
                </p>
            </div>

            {/* Second Division */}
            <div className='flex flex-row gap-12 md:gap-12 text-xs md:text-base leading-4 tracking-tight'>
                <p className='opacity-25 leading-4 tracking-tight'>
                    HEIGHT<br/>
                    SHOES
                </p>
                <p className='opacity-25 leading-4 tracking-tight'>
                    5’10”<br/>
                    39EU / 8US / 6UK
                </p>
            </div>
        </div>
    );
}


export default Footer;
