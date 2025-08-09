import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Footer/Footer';

const LayOut = () => {
    return (
        <div className='lg:px-4'>
            <Navbar> </Navbar>
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;