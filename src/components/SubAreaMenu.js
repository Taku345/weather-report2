import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { initAreaWithStatus } from "../store/modules/area";
import { getWeatherWithStatus } from "../store/modules/weather";


const SubAreaMenu = () => {
  const dispatch = useDispatch();

  const subAreaArray = useSelector(state => state.area.subAreaArray);

  useEffect(()=>{
    dispatch(getWeatherWithStatus(subAreaArray[0][0]))
  },[subAreaArray])

  const handleChange = (e) => {
    dispatch(getWeatherWithStatus(e.target.value));
  }

  return (
    <>
      {
        subAreaArray != []
          ? <select onChange={(e)=>handleChange(e)}>
              {subAreaArray.map((subArea) => <option key={subArea[0]} value={subArea[0]}>{subArea[1]}</option>)}
            </select>
          : "メインエリア初期化中..."
      }
    </>
  );
};

export default SubAreaMenu;