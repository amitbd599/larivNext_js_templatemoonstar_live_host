import MasterLayout from "@/layout/MasterLayout";
import AboutComponent from "@/components/AboutComponent";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <AboutComponent />
      </MasterLayout>
    </Fragment>
  );
}
