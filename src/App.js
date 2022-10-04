import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Countries from './Components/Countries/Countries';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('https://restcountries.com/v3.1/all');
      },
      element: <Countries></Countries>,
    },
    {
      path: '/country/:common',
      loader: async ({ params }) => {
        // console.log(params.common);
        return fetch(`https://restcountries.com/v3.1/name/${params.common}`);
      },
      element: <CountryDetails></CountryDetails>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
