
const Home = () => {
    return (
        <div>
            <div className="flex justify-center my-12">
                <span className="font-bold me-5">Looting for?</span>
                <input type="text" placeholder="Search Colleges" className="input input-bordered w-full max-w-xs" />
                <div className="ms-5">
                    <button className="btn btn-neutral">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;