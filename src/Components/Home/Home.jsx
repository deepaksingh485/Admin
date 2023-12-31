import React from 'react'

const Home = () => {
  return (
    <>
  <div className="row" id="proBanner">
    <div className="col-12">
      <span className="d-flex align-items-center purchase-popup">
        <p>
          Get tons of UI components, Plugins, multiple layouts, 20+ sample
          pages, and more!
        </p>
        <a
          href="https://www.bootstrapdash.com/product/celestial-admin-template/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview"
          target="_blank"
          className="btn download-button purchase-button ml-auto"
        >
          Upgrade To Pro
        </a>
        <i className="typcn typcn-delete-outline" id="bannerClose" />
      </span>
    </div>
  </div>
  <div className="container-scroller">
    {/* partial:partials/_navbar.html */}
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="images/logo-mini.svg" alt="logo" />
        </a>
        <button
          className="navbar-toggler navbar-toggler align-self-center d-none d-lg-flex"
          type="button"
          data-toggle="minimize"
        >
          <span className="typcn typcn-th-menu" />
        </button>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item  d-none d-lg-flex">
            <a className="nav-link" href="#">
              Calendar
            </a>
          </li>
          <li className="nav-item  d-none d-lg-flex">
            <a className="nav-link active" href="#">
              Statistic
            </a>
          </li>
          <li className="nav-item  d-none d-lg-flex">
            <a className="nav-link" href="#">
              Employee
            </a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item d-none d-lg-flex  mr-2">
            <a className="nav-link" href="#">
              Help
            </a>
          </li>
          <li className="nav-item dropdown d-flex">
            <a
              className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
              id="messageDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i className="typcn typcn-message-typing" />
              <span className="count bg-success">2</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="messageDropdown"
            >
              <p className="mb-0 font-weight-normal float-left dropdown-header">
                Messages
              </p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="images/faces/face4.jpg"
                    alt="image"
                    className="profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">
                    David Grey
                  </h6>
                  <p className="font-weight-light small-text mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="images/faces/face2.jpg"
                    alt="image"
                    className="profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">
                    Tim Cook
                  </h6>
                  <p className="font-weight-light small-text mb-0">
                    New product launch
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="images/faces/face3.jpg"
                    alt="image"
                    className="profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">
                    {" "}
                    Johnson
                  </h6>
                  <p className="font-weight-light small-text mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown  d-flex">
            <a
              className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i className="typcn typcn-bell mr-0" />
              <span className="count bg-danger">2</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <p className="mb-0 font-weight-normal float-left dropdown-header">
                Notifications
              </p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="typcn typcn-info-large mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    Application Error
                  </h6>
                  <p className="font-weight-light small-text mb-0">Just now</p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="typcn typcn-cog mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    Settings
                  </h6>
                  <p className="font-weight-light small-text mb-0">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="typcn typcn-user-outline mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    New user registration
                  </h6>
                  <p className="font-weight-light small-text mb-0">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle  pl-0 pr-0"
              href="#"
              data-toggle="dropdown"
              id="profileDropdown"
            >
              <i className="typcn typcn-user-outline mr-0" />
              <span className="nav-profile-name">Evan Morales</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <a className="dropdown-item">
                <i className="typcn typcn-cog text-primary" />
                Settings
              </a>
              <a className="dropdown-item">
                <i className="typcn typcn-power text-primary" />
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="typcn typcn-th-menu" />
        </button>
      </div>
    </nav>
    {/* partial */}
    <div className="container-fluid page-body-wrapper">
      {/* partial:partials/_settings-panel.html */}
      <div className="theme-setting-wrapper">
        <div id="settings-trigger">
          <i className="typcn typcn-cog-outline" />
        </div>
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close typcn typcn-delete-outline" />
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options" id="sidebar-light-theme">
            <div className="img-ss rounded-circle bg-light border mr-3" />
            Light
          </div>
          <div className="sidebar-bg-options selected" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3" />
            Dark
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles success" />
            <div className="tiles warning" />
            <div className="tiles danger" />
            <div className="tiles primary" />
            <div className="tiles info" />
            <div className="tiles dark" />
            <div className="tiles default border" />
          </div>
        </div>
      </div>
      {/* partial */}
      {/* partial:partials/_sidebar.html */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <div className="d-flex sidebar-profile">
              <div className="sidebar-profile-image">
                <img src="images/faces/face29.png" alt="image" />
                <span className="sidebar-status-indicator" />
              </div>
              <div className="sidebar-profile-name">
                <p className="sidebar-name">Kenneth Osborne</p>
                <p className="sidebar-designation">Welcome</p>
              </div>
            </div>
            <div className="nav-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type to search..."
                  aria-label="search"
                  aria-describedby="search"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="search">
                    <i className="typcn typcn-zoom" />
                  </span>
                </div>
              </div>
            </div>
            <p className="sidebar-menu-title">Dash menu</p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">
                Dashboard <span className="badge badge-primary ml-3">New</span>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="typcn typcn-briefcase menu-icon" />
              <span className="menu-title">UI Elements</span>
              <i className="typcn typcn-chevron-right menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i className="typcn typcn-film menu-icon" />
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/forms/basic_elements.html"
                  >
                    Basic Elements
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#charts"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i className="typcn typcn-chart-pie-outline menu-icon" />
              <span className="menu-title">Charts</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/charts/chartjs.html">
                    ChartJs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#tables"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i className="typcn typcn-th-small-outline menu-icon" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/tables/basic-table.html">
                    Basic table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#icons"
              aria-expanded="false"
              aria-controls="icons"
            >
              <i className="typcn typcn-compass menu-icon" />
              <span className="menu-title">Icons</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/icons/mdi.html">
                    Mdi icons
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="typcn typcn-user-add-outline menu-icon" />
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/login.html">
                    {" "}
                    Login{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/register.html">
                    {" "}
                    Register{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#error"
              aria-expanded="false"
              aria-controls="error"
            >
              <i className="typcn typcn-globe-outline menu-icon" />
              <span className="menu-title">Error pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="error">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-404.html">
                    {" "}
                    404{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-500.html">
                    {" "}
                    500{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="pages/documentation/documentation.html"
            >
              <i className="typcn typcn-document-text menu-icon" />
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-legend">
          <li>
            <p className="sidebar-menu-title">Category</p>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              #Sales
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              #Marketing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              #Growth
            </a>
          </li>
        </ul>
      </nav>
      {/* partial */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0 font-weight-bold">Kenneth Osborne</h3>
              <p>Your last login: 21h ago from newzealand.</p>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center justify-content-md-end">
                <div className="mb-3 mb-xl-0 pr-1">
                  <div className="dropdown">
                    <button
                      className="btn bg-white btn-sm dropdown-toggle btn-icon-text border mr-2"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="typcn typcn-calendar-outline mr-2" />
                      Last 7 days
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuSizeButton3"
                      data-x-placement="top-start"
                    >
                      <h6 className="dropdown-header">Last 14 days</h6>
                      <a className="dropdown-item" href="#">
                        Last 21 days
                      </a>
                      <a className="dropdown-item" href="#">
                        Last 28 days
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pr-1 mb-3 mr-2 mb-xl-0">
                  <button
                    type="button"
                    className="btn btn-sm bg-white btn-icon-text border"
                  >
                    <i className="typcn typcn-arrow-forward-outline mr-2" />
                    Export
                  </button>
                </div>
                <div className="pr-1 mb-3 mb-xl-0">
                  <button
                    type="button"
                    className="btn btn-sm bg-white btn-icon-text border"
                  >
                    <i className="typcn typcn-info-large-outline mr-2" />
                    info
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col-xl-5 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Sessions by Channel</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div
                            id="circleProgress6"
                            className="progressbar-js-circle rounded p-3"
                          />
                        </div>
                        <div className="col-lg-6">
                          <ul className="session-by-channel-legend">
                            <li>
                              <div>Firewalls(3)</div>
                              <div>4(100%)</div>
                            </li>
                            <li>
                              <div>Ports(12)</div>
                              <div>12(100%)</div>
                            </li>
                            <li>
                              <div>Servers(233)</div>
                              <div>2(100%)</div>
                            </li>
                            <li>
                              <div>Firewalls(3)</div>
                              <div>7(100%)</div>
                            </li>
                            <li>
                              <div>Firewalls(3)</div>
                              <div>6(70%)</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Events</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="d-flex justify-content-between mb-md-5 mt-3">
                            <div className="small">Critical</div>
                            <div className="text-danger small">Error</div>
                            <div className="text-warning small">Warning</div>
                          </div>
                          <canvas id="eventChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Device stats</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="d-flex justify-content-between mb-4">
                            <div>Uptime</div>
                            <div className="text-muted">195 Days, 8 hours</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div>First Seen</div>
                            <div className="text-muted">
                              23 Sep 2019, 2.04PM
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div>Collected time</div>
                            <div className="text-muted">
                              23 Sep 2019, 2.04PM
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div>Memory space</div>
                            <div className="text-muted">168.3GB</div>
                          </div>
                          <div className="progress progress-md mt-4">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Sessions by Channel</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="d-flex justify-content-between mb-4">
                            <div className="font-weight-medium">
                              Empolyee Name
                            </div>
                            <div className="font-weight-medium">This Month</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Connor Chandler
                            </div>
                            <div className="small">$ 4909</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Russell Floyd
                            </div>
                            <div className="small">$857</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Douglas White
                            </div>
                            <div className="small">$612 </div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Alta Fletcher{" "}
                            </div>
                            <div className="small">$233</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Marguerite Pearson
                            </div>
                            <div className="small">$233</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Leonard Gutierrez
                            </div>
                            <div className="small">$35</div>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <div className="text-secondary font-weight-medium">
                              Helen Benson
                            </div>
                            <div className="small">$43</div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="text-secondary font-weight-medium">
                              Helen Benson
                            </div>
                            <div className="small">$43</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Sales Analytics</h4>
                    <button type="button" className="btn btn-sm btn-light">
                      Month
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-md-flex mb-4">
                        <div className="mr-md-5 mb-4">
                          <h5 className="mb-1">
                            <i className="typcn typcn-globe-outline mr-1" />
                            Online
                          </h5>
                          <h2 className="text-primary mb-1 font-weight-bold">
                            23,342
                          </h2>
                        </div>
                        <div className="mr-md-5 mb-4">
                          <h5 className="mb-1">
                            <i className="typcn typcn-archive mr-1" />
                            Offline
                          </h5>
                          <h2 className="text-secondary mb-1 font-weight-bold">
                            13,221
                          </h2>
                        </div>
                        <div className="mr-md-5 mb-4">
                          <h5 className="mb-1">
                            <i className="typcn typcn-tags mr-1" />
                            Marketing
                          </h5>
                          <h2 className="text-warning mb-1 font-weight-bold">
                            1,542
                          </h2>
                        </div>
                      </div>
                      <canvas id="salesanalyticChart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Card Title</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <div className="mr-1">
                          <div className="text-info mb-1">Total Earning</div>
                          <h2 className="mb-2 mt-2 font-weight-bold">
                            287,493$
                          </h2>
                          <div className="font-weight-bold">
                            1.4% Since Last Month
                          </div>
                        </div>
                        <hr />
                        <div className="mr-1">
                          <div className="text-info mb-1">Total Earning</div>
                          <h2 className="mb-2 mt-2  font-weight-bold">
                            87,493
                          </h2>
                          <div className="font-weight-bold">
                            5.43% Since Last Month
                          </div>
                        </div>
                      </div>
                      <canvas id="barChartStacked" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">E-Commerce Analytics</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="d-sm-flex justify-content-between">
                        <div className="dropdown">
                          <button
                            className="btn bg-white btn-sm dropdown-toggle btn-icon-text pl-0"
                            type="button"
                            id="dropdownMenuSizeButton4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Mon,1 Oct 2019 - Tue,2 Oct 2019
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuSizeButton4"
                            data-x-placement="top-start"
                          >
                            <h6 className="dropdown-header">
                              Mon,17 Oct 2019 - Tue,25 Oct 2019
                            </h6>
                            <a className="dropdown-item" href="#">
                              Tue,18 Oct 2019 - Wed,26 Oct 2019
                            </a>
                            <a className="dropdown-item" href="#">
                              Wed,19 Oct 2019 - Thu,26 Oct 2019
                            </a>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm btn-light mr-2"
                          >
                            Day
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-light mr-2"
                          >
                            Week
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-light"
                          >
                            Month
                          </button>
                        </div>
                      </div>
                      <div className="chart-container mt-4">
                        <canvas id="ecommerceAnalytic" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="text-success font-weight-bold">
                            Inbound
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">Current</div>
                          <div className="text-muted">38.34M</div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">Average</div>
                          <div className="text-muted">38.34M</div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">Maximum</div>
                          <div className="text-muted">68.14M</div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">60th %</div>
                          <div className="text-muted">168.3GB</div>
                        </div>
                      </div>
                      <hr />
                      <div className="mt-4">
                        <div className="d-flex justify-content-between mb-3">
                          <div className="text-success font-weight-bold">
                            Outbound
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">Current</div>
                          <div className="text-muted">458.77M</div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">Average</div>
                          <div className="text-muted">1.45K</div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="font-weight-medium">Maximum</div>
                          <div className="text-muted">15.50K</div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="font-weight-medium">60th %</div>
                          <div className="text-muted">45.5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Sale Analysis Trend</h4>
                  </div>
                  <div className="mt-2">
                    <div className="d-flex justify-content-between">
                      <small>Order Value</small>
                      <small>155.5%</small>
                    </div>
                    <div className="progress progress-md  mt-2">
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="d-flex justify-content-between">
                      <small>Total Products</small>
                      <small>238.2%</small>
                    </div>
                    <div className="progress progress-md  mt-2">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mt-4 mb-5">
                    <div className="d-flex justify-content-between">
                      <small>Quantity</small>
                      <small>23.30%</small>
                    </div>
                    <div className="progress progress-md mt-2">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <canvas id="salesTopChart" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between">
                    <h4 className="card-title mb-3">Project status</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <img
                                className="img-sm rounded-circle mb-md-0 mr-2"
                                src="images/faces/face30.png"
                                alt="profile image"
                              />
                              <div>
                                <div> Company</div>
                                <div className="font-weight-bold mt-1">
                                  volkswagen
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Budget
                            <div className="font-weight-bold  mt-1">$2322 </div>
                          </td>
                          <td>
                            Status
                            <div className="font-weight-bold text-success  mt-1">
                              88%{" "}
                            </div>
                          </td>
                          <td>
                            Deadline
                            <div className="font-weight-bold  mt-1">
                              07 Nov 2019
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                            >
                              edit actions
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <img
                                className="img-sm rounded-circle mb-md-0 mr-2"
                                src="images/faces/face31.png"
                                alt="profile image"
                              />
                              <div>
                                <div> Company</div>
                                <div className="font-weight-bold  mt-1">
                                  Land Rover
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Budget
                            <div className="font-weight-bold  mt-1">$12022</div>
                          </td>
                          <td>
                            Status
                            <div className="font-weight-bold text-success  mt-1">
                              70%{" "}
                            </div>
                          </td>
                          <td>
                            Deadline
                            <div className="font-weight-bold  mt-1">
                              08 Nov 2019
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                            >
                              edit actions
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <img
                                className="img-sm rounded-circle mb-md-0 mr-2"
                                src="images/faces/face32.png"
                                alt="profile image"
                              />
                              <div>
                                <div> Company</div>
                                <div className="font-weight-bold  mt-1">
                                  Bentley{" "}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Budget
                            <div className="font-weight-bold  mt-1">$8,725</div>
                          </td>
                          <td>
                            Status
                            <div className="font-weight-bold text-success  mt-1">
                              87%{" "}
                            </div>
                          </td>
                          <td>
                            Deadline
                            <div className="font-weight-bold  mt-1">
                              11 Jun 2019
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                            >
                              edit actions
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <img
                                className="img-sm rounded-circle mb-md-0 mr-2"
                                src="images/faces/face33.png"
                                alt="profile image"
                              />
                              <div>
                                <div> Company</div>
                                <div className="font-weight-bold  mt-1">
                                  Morgan{" "}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Budget
                            <div className="font-weight-bold  mt-1">
                              $5,220{" "}
                            </div>
                          </td>
                          <td>
                            Status
                            <div className="font-weight-bold text-success  mt-1">
                              65%{" "}
                            </div>
                          </td>
                          <td>
                            Deadline
                            <div className="font-weight-bold  mt-1">
                              26 Oct 2019
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                            >
                              edit actions
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <img
                                className="img-sm rounded-circle mb-md-0 mr-2"
                                src="images/faces/face34.png"
                                alt="profile image"
                              />
                              <div>
                                <div> Company</div>
                                <div className="font-weight-bold  mt-1">
                                  volkswagen
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Budget
                            <div className="font-weight-bold  mt-1">$2322 </div>
                          </td>
                          <td>
                            Status
                            <div className="font-weight-bold text-success mt-1">
                              88%{" "}
                            </div>
                          </td>
                          <td>
                            Deadline
                            <div className="font-weight-bold  mt-1">
                              07 Nov 2019
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                            >
                              edit actions
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
        {/* partial:partials/_footer.html */}
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-center text-sm-left d-block d-sm-inline-block">
              Copyright ©{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank">
                bootstrapdash.com
              </a>{" "}
              2020
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Free{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank">
                Bootstrap dashboard{" "}
              </a>
              templates from Bootstrapdash.com
            </span>
          </div>
        </footer>
        {/* partial */}
      </div>
      {/* main-panel ends */}
    </div>
    {/* page-body-wrapper ends */}
  </div>
</>

  )
}

export default Home