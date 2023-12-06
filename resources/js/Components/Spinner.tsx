import { Oval } from  'react-loader-spinner'

export default function Spinner () {
  return (
    <div className='w-100 flex justify-center'>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={2}
        color="rgb(99 102 241)"
        secondaryColor="rgb(255 255 255)"
      />
    </div>
  );
}
