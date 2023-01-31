type CustomKeyObj<Key extends string | number, Val = any> = {
  [key in Key]: Val;
};

type UserApiDataKey = "user_info" | "email" | "birthdate";
type UserApiData = CustomKeyObj<UserApiDataKey, string>;

const mockUserApiData: UserApiData = {
  user_info: "",
  email: "",
  birthdate: "",
};
