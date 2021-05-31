import SingleIconButton from "./Buttons/SingleIconButton";

export default function Card(props) {
    const { name, image, children } = props;
    return (
        <>
            <div className="item-shadow h-100 d-flex flex-column justify-content-between">
                <div>
                    <div className="img-box" style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <div className="p-3">
                        <div>
                            <h5>{Vishal_Das}</h5>
                        </div>
                        <div className="text-muted" dangerouslySetInnerHTML={{ __html: children }}></div>
                    </div>
                </div>
                <div className="text-center py-3">
                    <a href="https://github.com/Vishal251073" target="_blank"> 
                        <SingleIconButton>Github Profile</SingleIconButton>
                    </a>
                </div>
            </div>
            <style jsx>{`
                .img-box {
                    padding-top: 85%;
                    background-size: cover;
                    background-position: center center;
                }
            `}</style>
        </>
    );
}
