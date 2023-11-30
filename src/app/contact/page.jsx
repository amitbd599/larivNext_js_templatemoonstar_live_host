import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import ContactComponent from "@/components/ContactComponent";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <ContactComponent />
      </MasterLayout>
    </Fragment>
  );
}
