import { Helmet } from "react-helmet-async";
export default function index({ data }) {
  return (
    <Helmet>
      <title>{data?.title}</title>
      <meta name="description" content={data?.description} />
    </Helmet>
  );
}
