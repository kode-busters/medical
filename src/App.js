import { Route, Switch, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/pages/About/About";
import Download from "./components/pages/Download/Download";
import Home from './components/pages/Home/Home';
import Notfound from "./components/pages/NotFound/Notfound";
import Contact from "./components/pages/Contact/Contact";
import FAQ from "./components/pages/FAQ/FAQ";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {

  const location = useLocation();

  return (
    <div>
      <Navigation />
      <TransitionGroup>
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/download' component={Download} />
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={FAQ} />
            <Route component={Notfound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div >
  );
}

export default App;
