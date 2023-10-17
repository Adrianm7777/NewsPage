import { useState } from "react";
import { useGetEverythingDataQuery } from "../../../redux/Services/EverythingApi/EverythingApi";
import ContainerNewsPage from "../../../reusable/ContainerNewsPage/ContainerNewsPage";

const PopularPage = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const {
    data: everythingApi,
    isLoading,
    error,
  } = useGetEverythingDataQuery({
    q: "kpop",
    language: "en",
    pageSize: displayCount.toString(),
    sortBy: "popularity",
  });

  return (
    <ContainerNewsPage
      label="POPULAR POST"
      error={error}
      isLoading={isLoading}
      setDisplayCount={setDisplayCount}
      data={everythingApi}
    />
  );
};

export default PopularPage;
