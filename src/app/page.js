import HomeComponent from "@/components/HomeComponent";
import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";

export const metadata = {
  title: "Home || Lariv - Nextjs Portfolio Template",
  description:
    "Introducing our Lariv Nextjs Portfolio Template, a meticulously crafted solution that seamlessly blends innovation and aesthetics to elevate your online presence.",
};

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <HomeComponent />
      </MasterLayout>
    </Fragment>
  );
}
