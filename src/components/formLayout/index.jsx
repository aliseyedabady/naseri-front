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
          lg: 8,
        },
        {
          key: "slug",
          label: "اسلاگ",
          rules: [
            {
              required: true,
            },
          ],
          lg: 8,
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
          lg: 8,
        },
        {
          key: "description",
          label: "توضیحات",
          type: "textarea",
          rules: [
            {
              required: true,
            },
          ],
          lg: 12,
        },
        {
          label: "توضیحات سيو",
          type: "textarea",
          nested: "seo",
          key: "seoDescription",
          lg: 12,
        },
        {
          key: "photo",
          label: "تصویر مقاله",
          type: "images",
          lg: 8,
        },
      ]}
    />
  );
};

export default FormLayOut;
