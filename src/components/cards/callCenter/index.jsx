import React from "react";
import { PhoneOutlined } from "@ant-design/icons";

const CallCenterCard = () => {
  return (
    <div>
      {" "}
      <div
        className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
        style={{
          backgroundColor: "#F1416C",
          backgroundImage: require("../../../assets/image/wave-bg-red.svg")
            .default,
        }}
      >
        {/*begin::Header*/}
        <div className="card-header pt-5 mb-3">
          {/*begin::Icon*/}
          <div
            className="d-flex flex-center rounded-circle h-80px w-80px"
            style={{
              border: "1px dashed rgba(255, 255, 255, 0.4)",
              backgroundColor: "#F1416C",
            }}
          >
            <PhoneOutlined
              color="#fff"
              style={{ fontSize: "30px", color: "#fff" }}
            />
          </div>
          {/*end::Icon*/}
        </div>
        {/*end::Header*/}
        {/*begin::کارت body*/}
        <div className="card-body d-flex align-items-end mb-3">
          {/*begin::Info*/}
          <div className="d-flex align-items-center">
            <span className="fs-4hx text-white fw-bold me-6">1.2k</span>
            <div className="fw-bold fs-6 text-white">
              <span className="d-block">ورودی</span>
              <span className>تماس </span>
            </div>
          </div>
          {/*end::Info*/}
        </div>
        {/*end::کارت body*/}
        {/*begin::کارت footer*/}
        <div
          className="card-footer"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            background: "rgba(0, 0, 0, 0.15)",
          }}
        >
          {/*begin::پردازش*/}
          <div className="fw-bold text-white py-2">
            <span className="fs-1 d-block">935</span>
            <span className="opacity-50">حرفه ایبلم بسته شده</span>
          </div>
          {/*end::پردازش*/}
        </div>
        {/*end::کارت footer*/}
      </div>
    </div>
  );
};

export default CallCenterCard;
