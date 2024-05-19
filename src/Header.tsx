export default function Header() {
  const routes = [
    {
      name: 'Home',
      path: '/#',
    },
    {
      name: 'About',
      path: '#about',
    },
    {
      name: 'Work',
      path: '#work',
    },
    {
      name: 'Contact',
      path: '#contact',
    },
  ];

  return (
    <header className="uppercase h-20 flex items-center justify-between px-12">
      <span className="text-3xl normal-case font-bold">Plamen.</span>
      <nav className="flex gap-10">
        {/* TODO: next time */}
        {routes.map((route, id) => (
          <a
            key={id}
            href={route.path}
            className={`${
              window.location.pathname === route.path
                ? 'border-b border-bc'
                : ''
            }`}
          >
            {route.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
