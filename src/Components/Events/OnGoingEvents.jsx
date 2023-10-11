import EventCard from "./EventCard";

export default function OnGoingEvents({events}){
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center my-5">Our on going events</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-around gap-2">
                            { events.map(event=><EventCard key={event.id} event={event}></EventCard>) }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}