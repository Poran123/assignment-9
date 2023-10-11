import EventCard from "./EventCard";

export default function EventsBooked(){
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center my-5">Events that you have booked</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <EventCard></EventCard>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}