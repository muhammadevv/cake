import { LogIn, SignUp } from "../components";
import { AboutPage, HomePage, NotFoundPage, ProductPage, Collections } from "../pages";

export const routes = [
  {
    id: 1,
    element: <HomePage />,
    path: '/',
  },
  {
    id: 2,
    element: <HomePage />,
    path: '/mens',
  },
  {
    id: 4,
    element: <AboutPage />,
    path: '/about',
  },
  {
    id: 5,
    element: <LogIn />,
    path: '/login',
  },
  {
    id: 6,
    element: <ProductPage />,
    path: '/product/:id',
  },
  {
    id: 7,
    element: <Collections />,
    path: '/collections/:id',
  },
  {
    id: 8,
    element: <SignUp />,
    path: '/signup',
  },
  {
    id: 9,
    element: <NotFoundPage />,
    path: '*',
  },
]

export const category = [
  {
    id: 1,
    title: 'Men',
    slug: '/mens',
  },
  {
    id: 2,
    title: 'Women',
    slug: '/womens',
  },
  {
    id: 3,
    title: 'About',
    slug: '/about',
  },
  {
    id: 4,
    title: 'Everworld Stories',
    slug: '/ever-world',
  },
]