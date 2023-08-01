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
            className='underline underline-offset-4 decoration-from-font hover:opacity-25'
            onClick={() => plausible('click_onlinesoni')}
          >
            @onlinesoni
          </a>
        </p>
        <p className="leading-4 tracking-tight">
          INQUIRIES<br/>
          <a 
            href='mailto:sonia.sabade@gmail.com' 
            className='underline underline-offset-4 decoration-from-font hover:opacity-25'
            onClick={() => plausible('click_sonia_email')}
          >
            sonia.sabade@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
