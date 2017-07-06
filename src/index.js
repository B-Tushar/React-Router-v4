import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import {BrowserRouter as Router,Route,Switch,Link,NavLink} from 'react-router-dom';

const Home = () => (<h2>Home Component</h2>);
const About = () => (<h2>About Component</h2>);
const Contact = () => (<h2>Contact Component</h2>);
const Career = () => (<h2>Career Component</h2>);
const Gallary = () => (<h2>Gallary Component</h2>);

const Content = () => (
  <div>
     <NavLink className="list-group-item"  activeClassName="active" to="/content/city">City</NavLink>
     <NavLink className="list-group-item"  activeClassName="active" to="/content/sports">Sports</NavLink>
     <Route  path="/content/:contentName" component={ContentDetails} />
  </div>
)

const ContentDetails = (props) => (
  <div>
  { props.match.params.contentName ? 
    <div>
    <img src={'http://lorempixel.com/400/200/'+props.match.params.contentName+'/1/'} /> 
    </div> 
    : 
    null
   }
   </div>
)


const Links = () => (
<div>
<ul>
<li><Link className="list-group-item" to="/">Home</Link></li>
<li><Link className="list-group-item" to="/about">About</Link></li>
<li><Link className="list-group-item" to="/content">Content</Link></li>
</ul>
<div className="list-group">
<li><NavLink className="list-group-item" exact activeClassName="selected" to="/contact">Contact</NavLink></li>
<li><NavLink className="list-group-item" exact activeClassName="selected" to="/career">Career</NavLink></li>
<li><NavLink className="list-group-item" exact activeClassName="selected" to="/gallary">Gallary</NavLink></li>
</div>
</div>
);
    
const App = () => (
  <Router>
    <div>
    <Links/>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route path="/content" component={Content} />
    <Route exact path='/career' component={Career} />
    <Route exact path='/gallary' component={Gallary} />
    </div>
  </Router>
)

ReactDOM.render(
  <App/>,
document.getElementById('root'));

