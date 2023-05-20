import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubToyCard from './SubToyCard';
const ShoByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/toys")
          .then((res) => res.json())
          .then((data) => setToys(data));
      }, []);
      const renderToysByCategory = (category) => {
        return toys
          .filter((toy) => toy.sub_category ===category)
          .map((toy) => <SubToyCard toy={toy} key={toy._id}></SubToyCard>);
      };
  return <div className='text-center'>


  <Tabs>
        <TabList>
          <Tab>Art & Craft</Tab>
          <Tab>Construction Toy</Tab>
          <Tab>Musical Instrument</Tab>
        </TabList>

        <TabPanel>{renderToysByCategory('Art & Craft')}
        
        
        </TabPanel>
        <TabPanel>{renderToysByCategory('Construction Toy')}</TabPanel>
        <TabPanel>{renderToysByCategory('Musical Instrument')}</TabPanel>
      </Tabs>
  </div>;
};

export default ShoByCategory;
