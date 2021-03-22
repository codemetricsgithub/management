import { FETCH_DATA } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      // console.log("profile");
      // console.log(action.payload);

      const profile = action.payload.map((data) => {
        console.log(data);

        return (
          <div>
            {data.firstName},{data.email},{data.lastName},{data.addmitionData}
          </div>
        );
        // console.log(profile);
      });
      
      console.log("reducer", profile);
      return [...state, ...profile];
    default:
      return state;
  }
}
