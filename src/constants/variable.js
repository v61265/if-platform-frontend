export const TOKEN_NAME = "token";

export const modalContent = {
  register: {
    name: "register",
    type: "form",
    title: "註冊",
    description: "* 暱稱請填寫辨識度高的暱稱或本名，加速管理員審核",
    components: [
      {
        type: "text",
        name: "username",
        placeholder: "設定帳號（無法再更改）",
        icon: "username",
      },
      {
        type: "password",
        name: "password",
        placeholder: "設定密碼（未來可以更改）",
        icon: "password",
      },
      {
        type: "password",
        name: "passwordAgain",
        placeholder: "請再輸入一次密碼",
        icon: "password",
      },
      {
        type: "text",
        name: "nickname",
        placeholder: "設定暱稱（未來可以更改）",
        icon: "nickname",
      },
      {
        type: "inputGroup",
        name: "session",
        select: {
          name: "from",
          placeholder: "選擇",
          icon: "from",
          options: [
            { value: "gs", name: "耕莘" },
            { value: "if", name: "想像朋友" },
          ],
        },
        input: {
          type: "number",
          name: "time",
          placeholder: "屆數",
          icon: "time",
        },
      },
      {
        type: "email",
        name: "email",
        placeholder: "電子郵件",
        icon: "email",
      },
      {
        type: "text",
        name: "contact",
        placeholder: "聯絡方式（社群或手機）",
        icon: "contact",
      },
    ],
    submit: "註冊",
    success: "registerSuccess",
    isOpen: false,
  },
  registerSuccess: {
    name: "registerSuccess",
    type: "text",
    texts: [
      "感謝註冊！",
      "請靜待管理員核可，並注意電子郵件信箱是否收到核可通知信！",
    ],
    isOpen: false,
  },
  resetPassword: {
    name: "resetPassword",
    type: "form",
    title: "重設密碼",
    description: "",
    components: [
      {
        type: "password",
        name: "oldPassword",
        placeholder: "輸入就密碼",
        icon: "password",
      },
      {
        type: "password",
        name: "newPassword",
        placeholder: "輸入新密碼",
        icon: "password",
      },
      {
        type: "password",
        name: "againPassword",
        placeholder: "請再輸入一次密碼",
        icon: "password",
      },
    ],
    submit: "確認更改密碼",
    success: "resetSuccess",
    isOpen: false,
  },
  forgetPassword: {
    name: "forgetPassword",
    type: "form",
    title: "重設密碼",
    description: "",
    components: [
      {
        type: "email",
        name: "email",
        placeholder: "輸入電子郵件信箱",
        icon: "email",
      },
      {
        type: "password",
        name: "newPassword",
        placeholder: "輸入新密碼",
        icon: "password",
      },
      {
        type: "password",
        name: "againPassword",
        placeholder: "請再輸入一次密碼",
        icon: "password",
      },
    ],
    submit: "確認更改密碼",
    success: "resetSuccess",
    isOpen: false,
  },
  resetSuccess: {
    name: "resetSuccess",
    texts: ["密碼更改成功，請重新登入！"],
    isOpen: false,
  },
};
