import Logo from '/logo/altchemix_logo.png';
import LogoLight from '/logo/altchemix_logo_light.png';

export default function BrandLogo({ variant }: { variant?: string }) {
  return (
    <>
      {variant === 'light' ? (
        <img
          src={LogoLight}
          alt='Altchemix'
          width='100%'
          className='w-auto h-14'
        />
      ) : (
        <img src={Logo} alt='Altchemix' width='100%' className='w-auto h-14' />
      )}
    </>
  );
}
