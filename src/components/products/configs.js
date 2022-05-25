// model['list_fields'].map(list_item) => {
// <td>
//     {item[list_item]}
// </td>
// }

export const Configs = {
  products: {
    route: "/user/list/active?pageIndex=0&pageSize=20",
    list_fields: [
      // {
      //   name: "id",
      //   title: "آیدی",
      // },
      {
        name: "firstName",
        title: "نام محصول",
      },
      {
        name: "lastName",
        title: "شناسه محصول",
      },
      {
        name: "price",
        title: "قیمت",
        after: " ریال",
      },
      {
        name: "number",
        title: "موجودی کالا",
      },
      {
        name: "type",
        title: "نوع محصول",
      },
    ],
    form_fields: [
      {
        name: "name",
        title: "نام محصول",
        type: "text",
      },
      {
        name: "code",
        title: "شناسه محصول",
        type: "text",
      },
      {
        name: "price",
        title: "قیمت",
        type: "text",
        after: "ریال",
      },
      {
        name: "number",
        title: "موجودی کالا",
        type: "text",
      },
      {
        name: "type",
        title: "نوع محصول",
        type: "text",
      },
      {
        name: "image",
        title: "تصویر",
        type: "file",
      },
    ],
  },
  user: {
    list_fields: [
      {
        id: "id",
        title: "آیدی",
      },
      {
        name: "username",
        title: "نام کاربری",
      },
      {
        first_name: "first_name",
        title: "نام",
      },
      {
        last_name: "last_name",
        title: "نام خانوادگی",
      },
      {
        email: "email",
        title: "ایمیل",
      },
      {
        phone: "phone",
        title: "شماره تماس",
      },
      {
        image: "image",
        title: "تصویر",
      },
      {
        checked: false,
        title: "وضعیت انتخاب",
      },
      {
        edit: "edit",
        title: "ویرایش",
      },
    ],
    form_fields: [
      {
        id: "id",
        title: "آیدی",
        type: "text",
      },
      {
        name: "username",
        title: "نام کاربری",
        max_length: 50,
        type: "text",
      },
      {
        first_name: "first_name",
        title: "نام",
        type: "text",
      },
      {
        last_name: "last_name",
        title: "نام خانوادگی",
        type: "text",
      },
      {
        email: "email",
        title: "ایمیل",
        type: "email",
      },
      {
        phone: "phone",
        title: "شماره تماس",
        type: "text",
      },
      {
        image: "image",
        title: "تصویر",
        type: "file",
      },
    ],
  },
  blog: {
    list_fields: [
      {
        id: "id",
        title: "آیدی",
      },
      {
        caption: "caption",
        title: "عنوان",
      },
      {
        description: "description",
        title: "توضیحات",
      },
      {
        image: "image",
        title: "تصویر",
      },
      {
        checked: false,
        title: "وضعیت انتخاب",
      },
      {
        edit: "edit",
        title: "ویرایش",
      },
    ],
    form_fields: [
      {
        id: "id",
        title: "آیدی",
        type: "text",
      },
      {
        caption: "caption",
        title: "عنوان",
        type: "text",
      },
      {
        description: "description",
        title: "توضیحات",
        type: "text",
      },
      {
        image: "image",
        title: "تصویر",
        type: "file",
      },
    ],
  },
  experts: {
    list_fields: [
      {
        id: "id",
        title: "آیدی",
      },
      {
        name: "username",
        title: "نام کاربری",
      },
      {
        first_name: "first_name",
        title: "نام",
      },
      {
        last_name: "last_name",
        title: "نام خانوادگی",
      },
      {
        email: "email",
        title: "ایمیل",
      },
      {
        phone: "phone",
        title: "شماره تماس",
      },
      {
        image: "image",
        title: "تصویر",
      },
      {
        post: "post",
        title: "عنوان شغلی",
      },
      {
        checked: false,
        title: "وضعیت انتخاب",
      },
      {
        edit: "edit",
        title: "ویرایش",
      },
    ],
    form_fields: [
      {
        id: "id",
        title: "آیدی",
        type: "text",
      },
      {
        name: "username",
        title: "نام کاربری",
        max_length: 50,
        type: "text",
      },
      {
        first_name: "first_name",
        title: "نام",
        type: "text",
      },
      {
        last_name: "last_name",
        title: "نام خانوادگی",
        type: "text",
      },
      {
        email: "email",
        title: "ایمیل",
        type: "email",
      },
      {
        phone: "phone",
        title: "شماره تماس",
        type: "text",
      },
      {
        image: "image",
        title: "تصویر",
        type: "file",
      },
      {
        post: "post",
        title: "عنوان شغلی",
        type: "text",
      },
    ],
  },
};

// export default Config;
