import { MetaProvider, Title } from '@solidjs/meta';
import { Router, Route } from '@solidjs/router';
import { lazy } from 'solid-js';

const Home = lazy(() => import('./pages/Home'));
const Room = lazy(() => import('./pages/Room'));

function getBasePath() {
  const { origin, pathname } = window.location;

  if (origin.includes('github.io')) {
    // e.g., https://username.github.io/my-aframe-solid-app/
    // → returns '/my-aframe-solid-app'
    const match = pathname.match(/^\/[^/]+/);
    return match ? match[0] : '/';
  }

  // Local dev or custom domain → root
  return '/';
}

function App() {
  const base = getBasePath();

  return (
    <MetaProvider>
      <Router
        base={base}
        root={(props) => {
          return (
            <>
              <Title>My A-Frame project</Title>
              {props.children}
            </>
          );
        }}
      >
        <Route path="/" component={Home} />
        <Route path="/room" component={Room} />;
      </Router>
    </MetaProvider>
  );
}
export default App;
