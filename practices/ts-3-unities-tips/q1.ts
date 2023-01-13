export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
}

// 改寫這個
export interface UserSegment {
  id: string;
  uri: string;
  page: number;
  phone: string;
  address: string;
}

// 改寫完之後變成...
export interface UserSegment {
  //...?
}
