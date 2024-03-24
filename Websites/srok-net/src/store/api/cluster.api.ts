// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // import { Connection } from "../../utils/enums/common.enums";
// import { ConnectionInstance as Connection } from "src/utils/constants/connection";

// interface ReqestBody {
//   node: string;
//   cluster_name: string;
// }
// export const clusterApi = createApi({
//   reducerPath: "cluster/api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: Connection.REST_HOST,
//   }),
//   endpoints: (build) => ({
//     changeClusterName: build.mutation<unknown, ReqestBody>({
//       query: ({ node, cluster_name }) => ({
//         url: `api/v2.0/nodes/${node}/cluster`,
//         method: "PUT",
//         body: {
//           cluster_name,
//         },
//       }),
//     }),
//   }),
// });

// export const { useChangeClusterNameMutation } = clusterApi;
