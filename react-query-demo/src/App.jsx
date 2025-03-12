import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // Make sure to create this component

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;