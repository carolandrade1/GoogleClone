import Footer from '../src/components/footer';
import IndexHead from '../src/components/common/head';
import Form from '../src/components/form';
import HeroHeader from '../src/components/heroHeader';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <IndexHead title='Google' />
      <HeroHeader />
      <Form />
      <Footer />
    </div>
  )
}
