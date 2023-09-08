import { List } from "./CarList.styled";
import { useSelector } from "react-redux";
import { selectVisibleCars } from "../../redux/selectors";
import { CarItem } from "../CarItem/CarItem";

export const CarList = () => {
  const visibleCars = useSelector(selectVisibleCars);

  return (
    <List>
      {visibleCars.map((item) => (
        <CarItem key={item.id} car={item} />
      ))}
    </List>
  );
};
