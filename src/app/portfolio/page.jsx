import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import PortfolioComponent from "@/components/PortfolioComponent";

export const metadata = {
  title: "Portfolio || Lariv - Nextjs Portfolio Template",
  description:
    "Introducing our Lariv Nextjs Portfolio Template, a meticulously crafted solution that seamlessly blends innovation and aesthetics to elevate your online presence.",
};

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <PortfolioComponent />
      </MasterLayout>
    </Fragment>
  );
}
