import { MetaProvider, Title } from '@solidjs/meta';
import { Router, Route } from '@solidjs/router';
import { lazy } from 'solid-js';

const Home = lazy(() => import('./pages/Home'));
const Room = lazy(() => import('./pages/Room'));

function App() {
  return (
    <MetaProvider>
      <Router
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
