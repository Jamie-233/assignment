import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Products from './common/products';
import PreviewProduct from './products/preview';
import CreateProduct from './products/create';
import EditProduct from './products/edit';

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <>
            <Route path="/" exact component={Products}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route path="/product/:id" exact component={PreviewProduct}></Route>
            <Route path="/product/new" exact component={CreateProduct}></Route>
            <Route path="/product/:id/edit" exact component={EditProduct}></Route>
          </>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
