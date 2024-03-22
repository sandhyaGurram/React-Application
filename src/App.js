import logo from './logo.svg';
import './App.css';

import "bootstrap-icons/font/bootstrap-icons.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './HIT/Header';
import Footer from './HIT/Footer';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import Routing from './HIT/Routing';
import UnMounting from './lifeCycles/UnMounting';
import Welcome from './lifeCycles/Welcome';

import Basic from './CRUDClass/Basic';
import Read from './CRUDClass/Read';
import CustRead from './CRUDClass/CustRead';
import AddBatches from './CRUDClass/AddBatches';
import SetBatch from './Hooks/SetBatch';
import GetBatch from './Hooks/GetBatch';
import GetContact from './Hooks/GetContact';
import SideNavbar from './SideNav/SideNavbar';
import HeaderTop from './SideNav/HeaderTop';
import MainPage from './SideNav/MainPage';
import CheckItem from './SideNav/CheckItem';
import TotalList from './SideNav/TotalList';
import HrDashboard from './Project-1/HrDashboard';
import HeaderEx from './Project-1/HeaderEx';
import FooterEx from './Project-1/FooterEx';
import Enquiries from './Project-1/Enquiries';
import Companies from './Project-1/Companies';
import Batchdetails from './Project-1/Batchdetails';
import Adminlogin from './SideNav/Adminlogin';
import Router from './SideNav/Router';
import Allproducts from './SideNav/Allproducts';
import Vegitables from './SideNav/Vegitables';
import AddVegitable from './SideNav/AddVegitable';
import VewVegitable from './SideNav/VewVegitable';




function App() {
  return (
    <div className="App">
    
      {/* <Companies/> */}
      <HeaderEx/>
      <Routing/>
      <FooterEx/>
      {/* <AddVegitable/> */}
      {/* <Allproducts/> */}
      {/* <Vegitables/>
      <VewVegitable/> */}
      {/* <HeaderTop/>
      <SideNavbar/> */}
      {/* <HeaderTop/>
      <Adminlogin/>
      <MainPage/> */}
      {/* <Header/>
      <Routing/>
      <Footer/> */}
      {/* <AddBatches/>
      <CustRead/> */}
      {/* <SetBatch/>
      <GetBatch/>
      <GetContact/> */}
    </div>
  );
}

export default App;
