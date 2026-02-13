import CardComponenet from "../../components/ui/CardContent/CardComponenet";
import BaseLayout from "@/layout/baselayout";
import Secondarynavbar from "../../components/ui/Secondarynavbar.tsx";
import { BASE_URL } from "@/apis/Api_endpoints";
import { useState } from "react";
import { useEffect } from "react";


const Allexperience = ({ items }) => {
  const [cards, setCards] = useState(items || []);

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedTravelTypes, setSelectedTravelTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [previewCount, setPreviewCount] = useState(0);

  useEffect(() => {
    setPreviewCount(items?.length || 0);
  }, [items]);

  const buildFilterQuery = () => {
    let query = "";
    let andIndex = 0;

    // Interest group
    if (selectedInterests.length > 0) {
      selectedInterests.forEach((slug, i) => {
        query += `&filters[$and][${andIndex}][my_filters][slug][$in][${i}]=${slug}`;
      });
      andIndex++;
    }

    // Traveler-Type group
    if (selectedTravelTypes.length > 0) {
      selectedTravelTypes.forEach((slug, i) => {
        query += `&filters[$and][${andIndex}][my_filters][slug][$in][${i}]=${slug}`;
      });
      andIndex++;
    }

    // Location group
    if (selectedLocations.length > 0) {
      selectedLocations.forEach((slug, i) => {
        query += `&filters[$and][${andIndex}][my_filters][slug][$in][${i}]=${slug}`;
      });
    }

    return query;
  };
  const fetchPreviewCount = async () => {
    try {
      const query = buildFilterQuery();

      const res = await fetch(
        `${BASE_URL}/expers?pagination[pageSize]=1${query}`,
      );

      const data = await res.json();

      setPreviewCount(data?.meta?.pagination?.total || 0);
    } catch (error) {
      console.log("Preview count error", error);
    }
  };
  useEffect(() => {
    fetchPreviewCount();
  }, [selectedInterests, selectedTravelTypes, selectedLocations]);

  const fetchCards = async () => {
    try {
      const query = buildFilterQuery();

      const res = await fetch(`${BASE_URL}/expers?populate=image${query}`);
      const data = await res.json();

      setCards(data.data || []);
    } catch (error) {
      console.log("Fetch cards error", error);
    }
  };

  return (
    <BaseLayout>
      <Secondarynavbar
        selectedInterests={selectedInterests}
        setSelectedInterests={setSelectedInterests}
        selectedTravelTypes={selectedTravelTypes}
        setSelectedTravelTypes={setSelectedTravelTypes}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        previewCount={previewCount}
        resultCount={cards.length}
        onShowResults={fetchCards}
      />

      <CardComponenet
        items={cards}
        selectedInterests={selectedInterests}
        selectedTravelTypes={selectedTravelTypes}
        selectedLocations={selectedLocations}
      />
    </BaseLayout>
  );
};

export async function getServerSideProps() {
  console.log("=== getServerSideProps called ===");
  try {
    const res = await fetch(
      `${BASE_URL}/expers?populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&populate[tagImage][fields][0]=url&populate[tagImage][fields][1]=alternativeText`,
      { method: "GET" },
    );
    console.log("Fetching API...");
    const data = await res.json();
    console.log("Data fetched:");

    return {
      props: {
        items: data.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        items: [],
      },
    };
  }
}

export default Allexperience;
