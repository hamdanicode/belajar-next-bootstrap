import CardPrd from "./CardPrd";

export default function TypeOfProduct() {
    return (
        <div className="container">
            <h2 className="text-center my-5">Tipe Produk</h2>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4">
                <CardPrd />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                <CardPrd />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                <CardPrd />
                </div>
            </div>
        </div>
    )
}