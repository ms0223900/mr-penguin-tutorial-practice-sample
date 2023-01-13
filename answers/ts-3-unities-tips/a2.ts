import {
  BasicSegment,
  MemberSegment,
} from "../../practices/ts-3-unities-tips/q2";

// 第一種方法
export interface GuestSegment
  extends Pick<BasicSegment, "id" | "uri">,
    Pick<MemberSegment, "user_type"> {}

// 第二種方法
export interface GuestSegment
  extends Omit<BasicSegment, "page">,
    Pick<MemberSegment, "user_type"> {}
