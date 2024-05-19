import Header from './Header.tsx';
import Landing from './Landing.tsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Landing />
      </main>
    </>
  );
}
