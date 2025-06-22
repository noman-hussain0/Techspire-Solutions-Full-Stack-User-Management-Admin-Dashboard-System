import { useAuth } from "../store/auth";
const Service = () => {
    const { services } = useAuth();
    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-headig">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {services.map((curEle, index) => {
                    const { provider, price, services, description } = curEle;

                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src="/images/design.png" alt="our service info" width="200" />
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <p>{provider}</p>
                                    <p>{price}</p>
                                </div>
                                <h2>{services}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })};

            </div>
        </section>
    );
};

export default Service;