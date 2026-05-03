import Benar from './Benar';
import Brands from './Brands';
import OurServices from './OurServices';
import Review from './Review/Review';
import Works from './Works';

const reviewDataPromis = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <Benar></Benar>
           <Works></Works>
           <OurServices></OurServices>
           <Brands></Brands>
           <Review reviewDataPromis={reviewDataPromis}></Review>
        </div>
    );
};

export default Home;