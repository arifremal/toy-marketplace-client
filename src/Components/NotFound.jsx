import usePath from "../hooks/usePath";

const NotFound = () => {
    usePath('404')
  return <div className="text-center">

    <img src={'https://i.ibb.co/YDpQ5HM/404.png'} alt="" />


  </div>;
};

export default NotFound;
