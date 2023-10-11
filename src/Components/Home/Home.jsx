import { useLoaderData } from "react-router-dom";
import CustomCarousel from "../Carousel/Carousel";
import OnGoingEvents from "../Events/OnGoingEvents";
import Newsletter from "../Newslatter/Newslatter";

export default function Home(){
    const onGoingEvents = useLoaderData();

    return (
        <>
            {/* carousel section */}
            <CustomCarousel></CustomCarousel>

            {/* on-going event section */}
            <OnGoingEvents events={onGoingEvents}></OnGoingEvents>

            {/* newslatter section */}
            <Newsletter></Newsletter>
        </>
    );
}