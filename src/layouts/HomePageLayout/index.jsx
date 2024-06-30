import { Header, Navbar } from "../../components";
import { default as SEO } from "../../seo";
import { useGetData } from "../../store/v2";

const index = ({ children }) => {
  const { DataSeo } = useGetData((state) => {
    return {
      DataSeo: state.data?.data.seo,
    };
  });

  return (
    <>
      <SEO data={DataSeo} />
      <Header />
      <Navbar />
      {children}
    </>
  );
};
export default index;
