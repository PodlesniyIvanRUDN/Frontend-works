import ReactDOM from 'react-dom/client';
import { ProductList } from './ProductList';
import { products } from './products';
import './main.css';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

console.log(products);

reactRoot.render(<ProductList products={products} />);

// TODO: Реализовать компонент ProductList
// reactRoot.render(<ProductList products={products} />);
