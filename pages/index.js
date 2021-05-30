import Card from "../components/Card";
import contributors from "@utils/contributors";

export default function Home() {
    return (
        <>
            <div className="container py-4">
                <div
                    className="item-shadow mx-3 p-5 text-white"
                    style={{ background: "linear-gradient(to right, #0c253a, #0c363a)" }}
                >
                    <h3>Cops Contributors NameCards</h3>
                    To fully accomplish this challenge you must successfully get your pull request merged.
                </div>
                <div className="row no-gutters mt-2">
                    {contributors.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-3 p-3" key={item.handle_name}>
                            <Card name={item.name} image={item.image} github={item.github}>
                                {item.description}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
