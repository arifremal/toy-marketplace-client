
import { Outlet } from 'react-router-dom';
import Header from '../Universel/Header';
import Footer from '../Universel/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;