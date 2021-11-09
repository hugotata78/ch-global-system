import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/Cart';
import { LeftSidebar } from './components/LeftSidebar';
import { NavBar } from './components/NavBar';
import { PaymentPopUp } from './components/PaymentPopUp';
import { ContainerRight } from './containers/ContainerRight';



function App() {
  

  return (
    <div className='container-fluid'>
      <PaymentPopUp />
      <div className='d-flex'>
        <div className='content-left'>
          <LeftSidebar />
        </div>
        <div className='content-right'>
          <NavBar />
          <div className='row p-2'>
            <div className='col-12 col-md-6 col-lg-4'>
              <Cart />
            </div>
            <div className='col-12 col-md-6 col-lg-8'>
              <ContainerRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
