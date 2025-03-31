import { MdDeleteForever } from "react-icons/md";
import style from "./Additem.module.css";

function Additem(props) {
  const onClickingDeleteButton = () => {
    props.toDelete(props.itemname);
  };

  return (
    <>
      <div className="row">
        <div className="col-6">{props.itemname}</div>
        <div className="col-4">{props.itemdate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger an-button ${style.button}`}
            onClick={onClickingDeleteButton}
          >
            <MdDeleteForever className={style.icon} />
            {/* Delete */}
          </button>
        </div>
      </div>
    </>
  );
}
export default Additem;
