import React from "react";
import { FETCH_NOTICE } from "../actions/types";

export default function noticeBoard(state = [], action) {
  switch (action.type) {
    case FETCH_NOTICE:
      const notice = action.payload.map((data) => {
        return (
          <div>
            <h1>{data.title}</h1>
            <h3>{data.message}</h3>
            <span>{data.startDate}</span>
            <span>{data.endDate}</span>
          </div>
        );
      });
    
      return [...state, ...notice];

    default:
      return state;
  }
}
