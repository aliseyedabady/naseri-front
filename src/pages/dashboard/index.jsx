import { Col, Grid, Row } from "antd";
import React from "react";
import CallCenterCard from "../../components/cards/callCenter";
import AkoLineChart from "../../components/chart/Line";
import AkoProgressCircle from "./components/progressCircle";

const Dashboard = () => {
  return (
    <Row gutter={30} justify={"space-between"}>
      <Col lg={6}>
        <CallCenterCard />
      </Col>
      <Col lg={12} md={12} sm={24}>
        <AkoLineChart />
      </Col>
      <Col lg={6}>
        <div className="card card-flush h-xl-100">
          {/*begin::Header*/}
          <div className="card-header pt-7">
            {/*begin::Title*/}
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold text-dark">
                محصولات تحویل
              </span>
              <span className="text-gray-400 mt-1 fw-semibold fs-6">
                1 میلیون محصول تا کنون ارسال شده است
              </span>
            </h3>
            {/*end::Title*/}
            {/*begin::Toolbar*/}
            <div className="card-toolbar">
              <a
                href="../../demo1/dist/apps/ecommerce/sales/details.html"
                className="btn btn-sm btn-light"
              >
                جزییات سفارش
              </a>
            </div>
            {/*end::Toolbar*/}
          </div>
          {/*end::Header*/}
          {/*begin::Body*/}
          <div className="card-body">
            {/*begin::Scroll*/}
            <div
              className="hover-scroll-overlay-y pe-6 me-n6"
              style={{ height: 415 }}
            >
              {/*begin::آیتم*/}
              <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                {/*begin::Info*/}
                <div className="d-flex flex-stack mb-3">
                  {/*begin::Wrapper*/}
                  <div className="me-3">
                    {/*begin::Icon*/}
                    <img
                      src="assets/media/stock/ecommerce/210.gif"
                      className="w-50px ms-n1 me-1"
                      alt
                    />
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      فیل 1802
                    </a>
                    {/*end::Title*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Actions*/}
                  <div className="m-0">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                          عملیات سریع
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          تیکت جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          جدید مشتری
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">گروه جدید</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه مدیر
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه کارکنان
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه عضوها
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          مخاطبین جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate گزارشات
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::مشتری*/}
                <div className="d-flex flex-stack">
                  {/*begin::نام*/}
                  <span className="text-gray-400 fw-bold">
                    به:
                    <a
                      href="../../demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      جیسون بورن
                    </a>
                  </span>
                  {/*end::نام*/}
                  {/*begin::Tags*/}
                  <span className="badge badge-light-success">
                    سفارش داده شده
                  </span>
                  {/*end::Tags*/}
                </div>
                {/*end::مشتری*/}
              </div>
              {/*end::آیتم*/}
              {/*begin::آیتم*/}
              <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                {/*begin::Info*/}
                <div className="d-flex flex-stack mb-3">
                  {/*begin::Wrapper*/}
                  <div className="me-3">
                    {/*begin::Icon*/}
                    <img
                      src="assets/media/stock/ecommerce/209.gif"
                      className="w-50px ms-n1 me-1"
                      alt
                    />
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      لباس
                    </a>
                    {/*end::Title*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Actions*/}
                  <div className="m-0">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                          عملیات سریع
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          تیکت جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          جدید مشتری
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">گروه جدید</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه مدیر
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه کارکنان
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه عضوها
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          مخاطبین جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate گزارشات
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::مشتری*/}
                <div className="d-flex flex-stack">
                  {/*begin::نام*/}
                  <span className="text-gray-400 fw-bold">
                    به:
                    <a
                      href="../../demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      دورانت
                    </a>
                  </span>
                  {/*end::نام*/}
                  {/*begin::Tags*/}
                  <span className="badge badge-light-primary">حمل دریایی</span>
                  {/*end::Tags*/}
                </div>
                {/*end::مشتری*/}
              </div>
              {/*end::آیتم*/}
              {/*begin::آیتم*/}
              <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                {/*begin::Info*/}
                <div className="d-flex flex-stack mb-3">
                  {/*begin::Wrapper*/}
                  <div className="me-3">
                    {/*begin::Icon*/}
                    <img
                      src="assets/media/stock/ecommerce/214.gif"
                      className="w-50px ms-n1 me-1"
                      alt
                    />
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      تی شرت زرد
                    </a>
                    {/*end::Title*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Actions*/}
                  <div className="m-0">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                          عملیات سریع
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          تیکت جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          جدید مشتری
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">گروه جدید</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه مدیر
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه کارکنان
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه عضوها
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          مخاطبین جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate گزارشات
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::مشتری*/}
                <div className="d-flex flex-stack">
                  {/*begin::نام*/}
                  <span className="text-gray-400 fw-bold">
                    به:
                    <a
                      href="../../demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      علی کاربر
                    </a>
                  </span>
                  {/*end::نام*/}
                  {/*begin::Tags*/}
                  <span className="badge badge-light-danger">تایید شده</span>
                  {/*end::Tags*/}
                </div>
                {/*end::مشتری*/}
              </div>
              {/*end::آیتم*/}
              {/*begin::آیتم*/}
              <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                {/*begin::Info*/}
                <div className="d-flex flex-stack mb-3">
                  {/*begin::Wrapper*/}
                  <div className="me-3">
                    {/*begin::Icon*/}
                    <img
                      src="assets/media/stock/ecommerce/211.gif"
                      className="w-50px ms-n1 me-1"
                      alt
                    />
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      فیل 1802
                    </a>
                    {/*end::Title*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Actions*/}
                  <div className="m-0">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                          عملیات سریع
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          تیکت جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          جدید مشتری
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">گروه جدید</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه مدیر
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه کارکنان
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه عضوها
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          مخاطبین جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate گزارشات
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::مشتری*/}
                <div className="d-flex flex-stack">
                  {/*begin::نام*/}
                  <span className="text-gray-400 fw-bold">
                    به:
                    <a
                      href="../../demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      محمد ابراهیمی
                    </a>
                  </span>
                  {/*end::نام*/}
                  {/*begin::Tags*/}
                  <span className="badge badge-light-success">
                    سفارش داده شده
                  </span>
                  {/*end::Tags*/}
                </div>
                {/*end::مشتری*/}
              </div>
              {/*end::آیتم*/}
              {/*begin::آیتم*/}
              <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                {/*begin::Info*/}
                <div className="d-flex flex-stack mb-3">
                  {/*begin::Wrapper*/}
                  <div className="me-3">
                    {/*begin::Icon*/}
                    <img
                      src="assets/media/stock/ecommerce/215.gif"
                      className="w-50px ms-n1 me-1"
                      alt
                    />
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      لباس
                    </a>
                    {/*end::Title*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Actions*/}
                  <div className="m-0">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                          عملیات سریع
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          تیکت جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          جدید مشتری
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">گروه جدید</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه مدیر
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه کارکنان
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه عضوها
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          مخاطبین جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate گزارشات
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::مشتری*/}
                <div className="d-flex flex-stack">
                  {/*begin::نام*/}
                  <span className="text-gray-400 fw-bold">
                    به:
                    <a
                      href="../../demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      محمد رضایی
                    </a>
                  </span>
                  {/*end::نام*/}
                  {/*begin::Tags*/}
                  <span className="badge badge-light-primary">حمل دریایی</span>
                  {/*end::Tags*/}
                </div>
                {/*end::مشتری*/}
              </div>
              {/*end::آیتم*/}
              {/*begin::آیتم*/}
              <div className="border border-dashed border-gray-300 rounded px-7 py-3">
                {/*begin::Info*/}
                <div className="d-flex flex-stack mb-3">
                  {/*begin::Wrapper*/}
                  <div className="me-3">
                    {/*begin::Icon*/}
                    <img
                      src="assets/media/stock/ecommerce/192.gif"
                      className="w-50px ms-n1 me-1"
                      alt
                    />
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <a
                      href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      تی شرت زرد
                    </a>
                    {/*end::Title*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Actions*/}
                  <div className="m-0">
                    {/*begin::Menu*/}
                    <button
                      className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={4}
                            fill="currentColor"
                          />
                          <rect
                            x={11}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={15}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                          <rect
                            x={7}
                            y={11}
                            width="2.6"
                            height="2.6"
                            rx="1.3"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                          عملیات سریع
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mb-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          تیکت جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          جدید مشتری
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">گروه جدید</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه مدیر
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه کارکنان
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              گروه عضوها
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          مخاطبین جدید
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator mt-3 opacity-75" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3 py-3">
                          <a className="btn btn-primary btn-sm px-4" href="#">
                            Generate گزارشات
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::مشتری*/}
                <div className="d-flex flex-stack">
                  {/*begin::نام*/}
                  <span className="text-gray-400 fw-bold">
                    به:
                    <a
                      href="../../demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fw-bold"
                    >
                      اتنا رضایی
                    </a>
                  </span>
                  {/*end::نام*/}
                  {/*begin::Tags*/}
                  <span className="badge badge-light-danger">تایید شده</span>
                  {/*end::Tags*/}
                </div>
                {/*end::مشتری*/}
              </div>
              {/*end::آیتم*/}
            </div>
            {/*end::Scroll*/}
          </div>
          {/*end::Body*/}
        </div>
      </Col>

      {/* <Col lg={4} md={8} sm={12}>
        <AkoProgressCircle />
      </Col> */}
    </Row>
  );
};

export default Dashboard;
