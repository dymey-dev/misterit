import { Link } from "react-router";
import { listData } from "../data";

function Card() {
  return (
    <>
      {listData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-4 lg:mx-0">
          {listData.map((item) => (
            <div
              className="card border-0 dark:border dark:border-primary w-full bg-base-100 card-sm shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-in-out hover:shadow-md"
              key={item.id}
            >
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="justify-end card-actions">
                  <Link to={item.link} className="btn btn-primary btn-sm">
                    Open
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p>No items found.</p>
        </div>
      )}
    </>
  );
}

export default Card;
