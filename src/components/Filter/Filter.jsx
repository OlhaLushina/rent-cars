import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/slice";
import { selectFilter } from "../../redux/selectors";
import { Container, Label } from "./Filter.styled";

/* Компонент Filter */
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  /* Фільтр */
  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Container>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Container>
  );
};
