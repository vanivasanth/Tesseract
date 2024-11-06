
import { Panel } from 'primereact/panel';
import DocUploader from './components/Fileupload';
import DataView from './components/DataView';
import { TabView, TabPanel } from 'primereact/tabview';        
import './App.css';
import "primereact/resources/themes/md-light-deeppurple/theme.css"; //theme
import "primereact/resources/primereact.min.css";                   //core css
import "primeicons/primeicons.css";
import PageLoader from './components/Loader';
import { useSelector } from "react-redux";

function App() {
  
  const  {loading}  = useSelector((state) => state.extractedData);
  
  return (
    <div className="App card m-2" >
      <Panel  className='mx-2 appHead'>
        <div style={{textAlign:'center', width:'100%'}}>
           <h3 > Data Extraction</h3>
        </div>
        <DocUploader/>
        { loading && <PageLoader/> }
        <DataView/>
     
      </Panel>
      
    </div>
  );
}

export default App;
