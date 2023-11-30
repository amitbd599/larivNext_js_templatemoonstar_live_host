import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import BlogDetailsComponent from "@/components/BlogDetailsComponent";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <BlogDetailsComponent />
      </MasterLayout>
    </Fragment>
  );
}
