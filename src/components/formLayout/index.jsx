import React from "react";
import "../../assets/fonts/vazir/font.css";
import "../../assets/styles/index.scss";
import Layout from "../../layout/index";
import "antd/dist/reset.css";
import AkoForm from "../form/index";

const FormLayOut = () => {
  return (
    <AkoForm
      form={[
        {
          key: "title",
          label: "عنوان",
          rules: [
            {
              required: true,
            },
          ],
        },
        {
          key: "slug",
          label: "اسلاگ",
          rules: [
            {
              required: true,
            },
          ],
        },
        {
          key: "categories_id",
          label: "دسته بندی مقاله",
          type: "select",
          need: "blog_categories",
          noNeed: true,
          rules: [
            {
              required: true,
            },
          ],
        },
        {
          key: "description",
          label: "توضیحات",
          type: "textarea",
          noNeed: true,
        },
        {
          key: "content",
          label: "متن مقاله",
          type: "editor",
        },
        {
          key: "photo",
          label: "تصویر مقاله",
          type: "images",
          noNeed: true,
        },
        {
          key: "tags",
          type: "keywords",
          label: "کلمات کلیدی",
          noNeed: true,
        },
        {
          label: "توضیحات سيو",
          type: "textarea",
          nested: "seo",
          key: "seoDescription",
          noNeed: true,
        },
      ]}
    />
  );
};

export default FormLayOut;
