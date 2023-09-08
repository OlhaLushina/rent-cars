import React from "react";
import { Filter } from "../components/Filter/Filter";
import { CarList } from "../components/CarList/CarList";
import { Section } from "../components/Section/Section";
import { fetchCars } from "../redux/cars/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../redux/selectors";
import { Loader } from "../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Section>
      <h2>CatalogPage</h2>
      <Filter />
      {isLoading && <Loader />}
      {!isLoading && !error && <CarList />}
    </Section>
  );
};

export default CatalogPage;
