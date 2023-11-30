import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import ServiceComponent from "@/components/ServiceComponent";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <ServiceComponent />
      </MasterLayout>
    </Fragment>
  );
}
