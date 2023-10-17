import { useState } from "react";
import { useGetLatestDataQuery } from "../../../../../redux/Services/TopHeadlinesApi/TopHeadlinesApi";
import ContainerNewsPage from "../../../../../reusable/ContainerNewsPage/ContainerNewsPage";

const TrendingPage = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const {
    data: trendingAllData,
    isLoading,
    error,
  } = useGetLatestDataQuery({
    country: "kr",
    category: "entertainment",
    pageSize: displayCount.toString(),
  });

  return (
    <ContainerNewsPage
      label="ALL TRENDING POST"
      error={error}
      isLoading={isLoading}
      setDisplayCount={setDisplayCount}
      data={trendingAllData}
    />
  );
};

export default TrendingPage;
