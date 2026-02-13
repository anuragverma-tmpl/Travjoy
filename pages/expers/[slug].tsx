import BaseLayout from "@/layout/baselayout";
import SinglePoi from "@/components/ui/SinglePOI/SinglePOI";
import { Base_Slug_Url, Slug_Url } from "@/apis/Api_endpoints";

const index = ({Data, Data2}) => {
  console.log(Data2,'data2');
  console.log(Data,"data");
  return (
    <BaseLayout>
      <SinglePoi Data={Data} Data2={Data2} />
    </BaseLayout>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  console.log("=== getServerSideProps called with slug fOR SinglePOI:", slug, " ===");
  try{
    const res = await fetch(`${Base_Slug_Url}${slug}${Slug_Url}`);
    const data = await res.json();

    const res2 = await fetch("http://192.168.1.108:1337/api/expers?populate=image");
    const data2 = await res2.json();
    
    return {
      props: {
        Data: data.data?.[0] || null,
        Data2: data2.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    return {
      props: {
        Data: null,
        Data2: [],
      },
    };
  }
}