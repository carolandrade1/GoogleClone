import Footer from '../src/components/footer';
import IndexHead from '../src/components/common/head';
import HeroHeader from '../src/components/heroHeader';
import NotFound_404 from '../src/components/NotFound_404';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <IndexHead title='404 | Not Found' />
      <NotFound_404 />
    </div>
  )
}