
import './App.css';
import {Route, Routes} from "react-router-dom";
import AlbumPage from "./pages/Albums/AlbumPage";
import TodosPage from "./pages/Todos/TodosPage";
import MainLayout from "./layouts/MainLayout";
import CommentsPage from "./pages/Comments/CommentsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
        <Route path={'/albums'} element={<AlbumPage/>} />
          <Route path={'/todos'} element={<TodosPage/>}/>
              <Route path={'/comments'} element={<CommentsPage/>}>
                  <Route path={'/comments/:postId'} element={<PostDetailsPage/>}/>
              </Route>

          </Route>
      </Routes>
    </div>
  );
}

export default App;
