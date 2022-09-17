import Contacts from "./component/contact/Contacts";
import Header from "./component/Header";
import Messages from "./component/message/Messages";
function App() {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-8 m-3 border-4 border-white border-dashed" style={{ height:'85vh' }}>
        <Contacts/>
        <Messages/>
      </div>
    </div>
  );
}

export default App;
