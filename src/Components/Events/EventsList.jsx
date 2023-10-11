import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

export default function EventsList(){
    const evevts = useLoaderData();

    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center my-5">We currently arrange the following events</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-around gap-2">
                            { evevts.map(event=><EventCard key={event.id} event={event}></EventCard>) }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}