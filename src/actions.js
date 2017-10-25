import store from './store';

export const addList = (user,opinion) => {
   let oldList = store.getState().list;
   const newList = oldList.concat({
      id: oldList.length,
      name: user,
      comment: opinion 
   });
   store.setState({
      list: newList
   });
};

export const deleteList = (id) => {
  let lists = [...store.getState().list];
  lists = lists.filter(item => item.id == id);
  store.setState({
    list: lists
  });
}