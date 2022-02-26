import { createStore } from "redux";
import { rootred } from "./Reducer/Rootreducer";


const Store=createStore(rootred);

export default Store;
