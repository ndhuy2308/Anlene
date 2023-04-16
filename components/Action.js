export const updateName = (name) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "name",
    payload: name
  });
export const updatePhoneNumber = (phoneNumber) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "phoneNumber",
    payload: phoneNumber
});

export const updateEmail = (Email) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "email",
    payload: Email
});

export const updateCo = (Co) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "Co",
    payload: Co
});

export const updateXuong = (Xuong) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "Xuong",
    payload: Xuong
});

export const updateKhop = (Khop) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "Khop",
    payload: Khop
});

export const updateDeKhang = (DeKhang) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "DeKhang",
    payload: DeKhang
});

export const updateFollow = (Follow) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "Follow",
    payload: Follow
});

export const updateKetQua = (KetQua) => ({
    type: "UPDATE_APPLICATION",
    fieldName: "KetQua",
    payload: KetQua
});

export const ResetKetQua = () => ({
    type: "UPDATE_APPLICATION",
    fieldName: "KetQua",
    payload: 0
});