import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import ServiceComponent from "@/components/ServiceComponent";

export const metadata = {
  title: "Service || Lariv - Nextjs Portfolio Template",
  description:
    "Introducing our Lariv Nextjs Portfolio Template, a meticulously crafted solution that seamlessly blends innovation and aesthetics to elevate your online presence.",
};

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <ServiceComponent />
      </MasterLayout>
    </Fragment>
  );
}
