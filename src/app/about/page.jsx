import MasterLayout from "@/layout/MasterLayout";
import AboutComponent from "@/components/AboutComponent";
import { Fragment } from "react";

export const metadata = {
  title: "About || Lariv - Nextjs Portfolio Template",
  description:
    "Introducing our Lariv Nextjs Portfolio Template, a meticulously crafted solution that seamlessly blends innovation and aesthetics to elevate your online presence.",
};

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <AboutComponent />
      </MasterLayout>
    </Fragment>
  );
}
