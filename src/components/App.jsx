import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}
