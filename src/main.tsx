import ReactDOM from 'react-dom/client';
import { SetupWorker } from 'msw/lib/browser';
import App from './App';

const { DEV, VITE_MOCK_API } = import.meta.env;

async function enableMocking(): Promise<SetupWorker | undefined> {
  if (!DEV && !VITE_MOCK_API) return;

  const { worker } = await import('./mocks/browser');

  worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
