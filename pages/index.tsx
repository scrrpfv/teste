import Header from '../components/Header';

export default function Home() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='px-[20px] py-[60px] text-center'>
        <h2 className='font-semibold mb-[20px]'>Bem-vindo à NEPCOM</h2>
        <p>Somos uma equipe de desenvolvimento em TI, freelancing e soluções tecnológicas.</p>
      </main>
    </div>
  );
}
