export const TOKEN_NAME = "token";

export const formContent = {
  login: {
    title: "",
    description: "",
    submit: "登入",
    inputs: {
      username: {
        type: "text",
        placeholder: "你的帳戶",
        icon: "username",
      },
      password: {
        type: "password",
        placeholder: "你的密碼",
        icon: "password",
      },
    },
  },
  register: {
    title: "註冊",
    description: "* 暱稱請填寫辨識度高的暱稱或本名，加速管理員審核",
    submit: "註冊",
    inputs: {
      username: {
        type: "text",
        placeholder: "設定帳號（無法再更改）",
        icon: "username",
      },
      password: {
        type: "password",
        placeholder: "設定密碼（未來可以更改）",
        icon: "password",
      },
      passwordAgain: {
        type: "password",
        placeholder: "請再輸入一次密碼",
        icon: "password",
      },
      nickname: {
        type: "text",
        placeholder: "設定暱稱（未來可以更改）",
        icon: "nickname",
      },
      session: {
        type: "select",
        placeholder: "選擇",
        icon: "from",
        options: [],
      },
      email: {
        type: "email",
        placeholder: "電子郵件",
        icon: "email",
      },
      contact: {
        type: "text",
        placeholder: "聯絡方式（社群或手機）",
        icon: "contact",
      },
    },
  },
  forgetPassword: {
    title: "重設密碼",
    description: "",
    submit: "確認更改密碼",
    inputs: {
      email: {
        type: "email",
        placeholder: "輸入電子郵件信箱",
        icon: "email",
      },
      newPassword: {
        type: "password",
        placeholder: "輸入新密碼",
        icon: "password",
      },
      againPassword: {
        type: "password",
        placeholder: "請再輸入一次密碼",
        icon: "password",
      },
    },
  },
};

const sessionNumber = 15;
for (let i = sessionNumber; i > 0; i--) {
  formContent.register.inputs.session.options.push({
    value: i < 14 ? (i < 10 ? `gs_0${i}` : `gs_${i}`) : `if_0${i - 13}`,
    name: i < 14 ? `耕莘 ${i}` : `想像朋友 ${i - 13}`,
  });
}

export const textModalContent = {
  resetSuccess: ["密碼更改成功，請重新登入！"],
  registerSuccess: [
    "感謝註冊！",
    "請靜待管理員核可，並注意電子郵件信箱是否收到核可通知信！",
  ],
};

export const checkModalContent = {
  present: ["確認要報名現場嗎？"],
  online: ["確認要報名線上嗎？"],
  cancelSignUpEvent: ["確認要取消參加嗎？"],
};
