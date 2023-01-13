export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
  user_type: string;
}

// 改寫這個
export interface GuestSegment {
  id: string;
  uri: string;
  user_type: string;
}

// 改寫之後變成...
export interface GuestSegment {
  //...
}
