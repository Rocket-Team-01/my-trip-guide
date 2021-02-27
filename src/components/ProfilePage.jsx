import React from "react";
import Header from "./Header";
import "../css/ProfilePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "@material-ui/core/Switch";

function ProfilePage() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state);
  };

  return (
    <div className="profilepage">
      <Header />
      <div className="container  mt-5">
        <div className="row my-2">
          <div className="col-lg-8 order-lg-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className="btn active button-profile "
                  data-target="#profile"
                  data-toggle="tab"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="mr-5 button-profile "
                  data-target="#edit"
                  data-toggle="tab"
                >
                  Preferences
                </button>
              </li>
            </ul>
            <div className="tab-content py-4">
              <div className="tab-pane active" id="profile">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="mb-3">User Profile</h5>
                    <form>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Username
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            value="daleeuser"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          First name
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            value="Dale"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Last name
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            value="Richardson"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Email
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="email"
                            value="dale.richardson@example.com"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Phone
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            value="(407)-954-0623"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Address
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="text"
                            value=""
                            placeholder="Street"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label"></label>
                        <div className="col-lg-6">
                          <input
                            className="form-control"
                            type="text"
                            value=""
                            placeholder="City"
                          />
                        </div>
                        <div className="col-lg-3">
                          <input
                            className="form-control"
                            type="text"
                            value=""
                            placeholder="State"
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Password
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="password"
                            value="11111122333"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                          Confirm password
                        </label>
                        <div className="col-lg-9">
                          <input
                            className="form-control"
                            type="password"
                            value="11111122333"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label"></label>
                        <div className="col-lg-9">
                          <input
                            type="button"
                            className="btn btn-primary"
                            value="Change"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* ================   EDIT   ==================  */}
              <div className="tab-pane" id="edit">
                <form>
                  <div className="form-group row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-1 col-sm-1 ">Email</div>
                    <div className="col-lg-1 col-sm-1  ">Phone</div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-6 col-form-label form-control-label ">
                      Someone follows me
                    </label>
                    <div className="col-lg-6 ">
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      <Switch
                        checked={state.checkedE}
                        onChange={handleChange}
                        name="checkedE"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-6 col-form-label form-control-label">
                      My friends join Restaurant Searcher
                    </label>
                    <div className="col-lg-6 ">
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      <Switch
                        checked={state.checkedF}
                        onChange={handleChange}
                        name="checkedF"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-6 col-form-label form-control-label">
                      Important updates from Restaurant Searcher
                    </label>
                    <div className="col-lg-6 ">
                      <Switch
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      <Switch
                        checked={state.checkedG}
                        onChange={handleChange}
                        name="checkedG"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-6 col-form-label form-control-label">
                      Weekly Newsletter
                    </label>
                    <div className="col-lg-6 ">
                      <Switch
                        checked={state.checkedD}
                        onChange={handleChange}
                        name="checkedD"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      <Switch
                        checked={state.checkedH}
                        onChange={handleChange}
                        name="checkedH"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-1 text-center">
            <img
              src="https://randomuser.me/api/portraits/lego/8.jpg"
              className=" img-width img-circle w-50"
              alt="avatar"
            />
            <h6 className="mt-2">Upload a different photo</h6>
            <label className="custom-file">
              <input type="file" id="file" className="custom-file-input" />
              <span className="custom-file-control">Choose file</span>
            </label>
            <hr />
            <span className="badge badge-primary">
              <i className="fa fa-user"></i> 900 Followers
            </span>
            <span className="badge badge-success">
              <i className="fa fa-cog"></i> 43 Forks
            </span>
            <span className="badge badge-danger">
              <i className="fa fa-eye"></i> 245 Views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
/*

<Row component={"span"}>
          <h3 className="text-center">Profile Information</h3>
          <Table striped bordered hover className="w-50 mx-auto mt-5 tableback">
            <tbody>
              <tr className="text-white">
                <td>Name :</td>
                <td>Dale Richardson</td>
              </tr>
              <tr className="text-white">
                <td>Email :</td>
                <td>dale.richardson@example.com</td>
              </tr>
              <tr className="text-white">
                <td>Address :</td>
                <td>8135 Royal Ln</td>
              </tr>
              <tr className="text-white">
                <td>Phone Number :</td>
                <td>(407)-954-0623</td>
              </tr>
              <tr className="text-white">
                <td>Birthday :</td>
                <td>8/2/1953</td>
              </tr>
            </tbody>
          </Table>
        </Row>
*/

/*
<Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="text-center mx-auto"
          >
            <ProfileLists />
          </Col>



*/
