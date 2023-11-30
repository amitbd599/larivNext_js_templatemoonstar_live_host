import HomeComponent from "@/components/HomeComponent";
import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <HomeComponent />
      </MasterLayout>
    </Fragment>
  );
}
