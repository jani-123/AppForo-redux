import createStore from 'redux-zero';

const LISTCOMMENT = [
   {
      id: 0,
      name:'JuanPerez',
      comment: 'me gusta la pagina'
   },
   {
    id: 1,
    name:'Maricielo',
    comment: 'Esta pagina es super!!!'
 }
];

const initialState = {
   list: LISTCOMMENT ,
   selectedList: -1
};

const store = createStore(initialState);
export default store;