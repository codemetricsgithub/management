import React, { useEffect, useState } from "react";

import "../../assets/card.css";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const getNotice = async () => {
    const response = await fetch(
      "https://ak-sms-api.herokuapp.com/api/v1/notice"
    );

    // Converting it to the json format
    const data = await response.json();

    setNotice(data.data.reverse());
  };

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <>
      <div className=" container-fluid mt-5">
        <div className=" row text-center">
          {notice.map((value) => {
            return (
              <div className=" col-md-4 " key={value._id}>
                <div className=" card p-1">
                  <div className=" d-flex align-items-center">
                    <div className=" ml-3 w-100">
                      <h4 className=" mb-0 mt-0 textLeft title">
                        {value.title}
                      </h4>
                      <span className=" textLeft message">{value.message}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notice;
