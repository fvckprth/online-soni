import { usePlausible } from 'next-plausible';

function Footer() {
  const plausible = usePlausible();

  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center py-2 md:py-0'>
      {/* First Division */}
      <div className='flex flex-row gap-12 text-xs md:text-base mb-6 md:mb-0'>
        <p className='leading-4 tracking-tight'>
          INSTAGRAM<br/>
          <a 
            href='https://www.instagram.com/onlinesoni/' 
            className='underline underline-offset-4 decoration-from-font hover:opacity-25 plausible-event-name=click_onlinesoni plausible-event-position=footer'
            onClick={() => plausible('click_onlinesoni')}
          >
            @onlinesoni
          </a>
        </p>
        <p className="leading-4 tracking-tight">
          INQUIRIES<br/>
          <a 
            href='mailto:sonia.sabade@gmail.com' 
            className='underline underline-offset-4 decoration-from-font hover:opacity-25 plausible-event-name=click_sonia_email plausible-event-position=footer'
            onClick={() => plausible('click_sonia_email')}
          >
            sonia.sabade@gmail.com
          </a>
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
                    39.5EU / 8.5US / 6.5UK
                </p>
            </div>
        </div>
    );
}

export default Footer;
