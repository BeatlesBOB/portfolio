import Image from 'next/image'

export default function Home() {
  return (
    <><Image
      src="/images/funcky.png"
      width={500}
      height={500}
      alt="Picture of the author Loppo"
    />
      <p className='text-4xl font-semibold'>Site en construction, ça arrive fort !</p>
      <p>Promis, ça arrive fort !</p>
    </>
  );
}
