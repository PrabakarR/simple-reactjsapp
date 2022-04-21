import logo from './logo.svg';
import './App.css';
import Customer from './Customer';

function App() {
  return (
    
    <div className="App">
      <header className="headerWrap fixed-top shadow bg-white">
        <div className='container'>
          <div className='innerheaderWrap'>
            <div className='leftLogo'>
              <img src={logo} className="img-fluid" alt="logo" />
            </div>

            <div className='rightContent'>
              <p className='mb-0'>Simple React App</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mainWrap">

        <section className='py-5 text-center'>
          <div className='container'>
            <h2 className='fs-2 text-center fw-bold mb-4'>Learn React JS</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
        </section>

      <Customer />
     

      </div>

    </div>
  );
}

export default App;
