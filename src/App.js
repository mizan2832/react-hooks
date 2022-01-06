import React,{Component} from 'react';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Clock from './components/Clock';
// import HookCounter from './components/HookCounter';
// import HookConterTwo from './components/HookConterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/useEffect/HookCounterOne';
class App extends Component{
    render(){
        return(
            <div>
               {/* <HookCounter /> */}
               {/* <HookConterTwo /> */}
               {/* <HookCounterFour /> */}
               <HookCounterOne />
               
            </div>
        );
    }
}
export default App;
