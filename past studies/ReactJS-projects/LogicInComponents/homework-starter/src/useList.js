import { useEffect, useState } from "react";
export function useList() {
  /** Создать новый элемент. */

  const setNewItem = (objName) => {
    let tmp =  [...list];
    tmp.push({title: objName,id: crypto.randomUUID(), done: false })
    setList(tmp)
  };

  const createItem = () => {
    let tmp =  [...list];
    tmp.push({title: "New Element",id: crypto.randomUUID(), done: false })
    setList(tmp)
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const [list, setList] = useState([ ]);


  const setItemTitle = (id, title) => {
      setList(currentList => currentList.map((item) => (item.id === id) ?{...item, title} :item))
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
      let tmp =  [...list];
      let v = tmp.map(item => item.id).indexOf(id)
      console.log(v);
      let obj = {...tmp[v]};
      obj.done = !tmp[v].done;
      tmp[v] = {...obj};
      console.log(tmp)
      setList(tmp)
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    let tmp =  [...list];
    tmp = tmp.filter((item) => item.id != id)
    console.log("DELETE IT", tmp);
    setList(tmp)
  };




  return {
    list,
    createItem,
    setNewItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
