type AdminUserData = {
  id: string;
  last_update: string;
  vip_level: number;
};

const adminUserData: AdminUserData = {
  //...
};

// api update
type PartialUpdateAdminUserData = Partial<AdminUserData>;
const partialUpdateAdminUserData: PartialUpdateAdminUserData = {
  vip_level: 11,
};

// 實作

type MyPartial<Obj> = {
  [k in keyof Obj]?: Obj[k];
};
