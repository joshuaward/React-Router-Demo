import { createRoot } from "react-dom/client";

import App from "./App";

import "./assets/scss/styles.scss";

import { ProductsProvider } from './context/products.context';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareThreads,
  faSquareInstagram,
  faSquareFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(
  fas,
  faSquareThreads,
  faSquareInstagram,
  faSquareFacebook,
  faLinkedin
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
