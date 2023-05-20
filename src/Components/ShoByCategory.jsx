import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubToyCard from "./SubToyCard";
const ShoByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-mart-server-arifremal.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const renderToysByCategory = (category) => {
    return toys
      .filter((toy) => toy.sub_category === category)
      .map((toy) => <SubToyCard toy={toy} key={toy._id}></SubToyCard>);
  };
  return (
    <div className="text-center">
      <Tabs>
        <TabList>
          <Tab>Baby Dolls</Tab>
          <Tab>Barbie Toy</Tab>
          <Tab>American Girl</Tab>
        </TabList>

        <TabPanel>{renderToysByCategory("Baby Dolls")}</TabPanel>
        <TabPanel>{renderToysByCategory("Barbie")}</TabPanel>
        <TabPanel>{renderToysByCategory("American Girl")}</TabPanel>
      </Tabs>
    </div>
  );
};

export default ShoByCategory;
