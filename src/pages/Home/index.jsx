import { Lives, FullSlider } from "../../components";
import { useV2 } from "../../hooks/useV2";
import { HomePageLayout } from "../../layouts";
import * as React from "react";

const index = () => {
  const { loading, error } = useV2();

  return (
    <HomePageLayout>
      <Lives />
      <FullSlider />
    </HomePageLayout>
  );
};

export default index;
