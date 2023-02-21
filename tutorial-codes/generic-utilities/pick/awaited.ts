type UserPromiseData = Promise<{
  id: string;
  name: string;
  email: string;
}>;

type UserData = Awaited<UserPromiseData | boolean>;

type NestedUserPromiseData = Promise<UserPromiseData>;

type NestedAwaitedUserData = Awaited<NestedUserPromiseData>;

// 實作
