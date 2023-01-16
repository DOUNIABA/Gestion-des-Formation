import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="d-flex justify-content-between border-bottom ">
        <div className="d-flex m-3 " id="dashboard">
          <div className="bg" id="sidebar-dashboard">
            <div className=" redressed fw-bolder m-2 dark-text fs-5 fw-bold border-start border-3 px-2">
            
            </div>

            <div className="text-center " />
            <hr className=""></hr>
    
            <Link
              to=""
              className="list-group-item  mx-5 border-0 merriweather bg-transparent mt-5 "
            >
              <span style={{ color: "white" }}>
                <i className="far fa-bookmark"></i> 
              </span>
            </Link>

            <Link
              to=""
              className="list-group-item mx-5 merriweather border-0 bg-transparent rounded-3 mt-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-graduation-cap"></i>
              </span>
            </Link>
            <Link
              to="/client"
              className="list-group-item mx-5 merriweather border-0 bg-transparent rounded-3 mt-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-graduation-cap"></i>
              </span>
            </Link>

            <a
              href="#"
              className="list-group-item mx-5 merriweather border-0 bg-transparent rounded-3 mt-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-graduation-cap"></i>
              </span>
            </a>

            <a
              href="#"
              className="list-group-item mx-5 border-0 merriweather bg-transparent mt-5 mb-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-sliders-h"></i>
              </span>
            </a>
            <form>
              <button
                type="submit"
                name="logout"
                className="list-group-item mx-5 border-0 merriweather bg-transparent  mt-5 mb-5 "
              >
                <span style={{ color: "white" }}>
                  <i className="fas fa-sign-out-alt">Logout </i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}