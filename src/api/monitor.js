import request from "@/utils/request";

export function tracker(data) {
  return request({
    url: "/api/monitor",
    method: "post",
    data,
  });
}
