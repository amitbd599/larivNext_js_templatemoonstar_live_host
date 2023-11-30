import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import BlogComponent from "@/components/BlogComponent";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <BlogComponent />
      </MasterLayout>
    </Fragment>
  );
}
