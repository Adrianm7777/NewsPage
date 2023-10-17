import ContainerNewsPage from "../../../../reusable/ContainerNewsPage/ContainerNewsPage";
import { useGetEverythingDataQuery } from "../../../../redux/Services/EverythingApi/EverythingApi";
import { useState } from "react";

const LatestPage = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const {
    data: everythingApi,
    isLoading,
    error,
  } = useGetEverythingDataQuery({
    q: "kpop",
    language: "en",
    pageSize: displayCount.toString(),
  });

  return (
    <ContainerNewsPage
      label="ALL LATEST POST"
      data={everythingApi}
      isLoading={isLoading}
      error={error}
      setDisplayCount={setDisplayCount}
    />
  );
};

export default LatestPage;
