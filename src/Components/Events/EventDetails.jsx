import { useLoaderData, useParams } from "react-router-dom";

export default function EventDetails(){
    const {id} = useParams();
    const event = useLoaderData();

    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        {
                            event.filter(e=>e.id==id).map(e=><div className="col-12">
                            <h1 className="title mb-3">{e.event_name}</h1>

                            <img src={e.image_url} alt="event img" />

                            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem recusandae ipsam minus aperiam provident explicabo omnis sint praesentium facere labore officia consectetur corrupti error ipsa quos ad eveniet, natus nobis?</p>

                            <div>
                                <h3>Event cost: {e.price}/=</h3>

                                <button className="btn btn-primary">Book this event</button>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
}