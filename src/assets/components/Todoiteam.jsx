import Additem from "./Additem";

function Todoiteam({Itemarray,toDelete}) {

  return (
    <>{ 
      Itemarray.map( 
        (item) => (<Additem key={item.Name} itemname={item.Name} itemdate={item.DueDate} toDelete={toDelete}></Additem>)
      )
    }
    </>
    
  );
}

export default Todoiteam;
