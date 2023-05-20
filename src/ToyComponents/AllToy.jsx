
import Toysshop from '../Components/Toysshop';
import usePath from '../hooks/usePath';

const AllToy = () => {
    usePath('All Toy')
    return (
        <div>
                 <h1 className="text-center text-3xl font-bold p-2 uppercase ">
      ALL <span className="text-green-500">toy </span>
      </h1>
      <div>
      <Toysshop></Toysshop>
      </div>
        </div>
    );
};

export default AllToy;