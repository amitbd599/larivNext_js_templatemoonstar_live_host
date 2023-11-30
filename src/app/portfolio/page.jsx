import MasterLayout from "@/layout/MasterLayout";
import { Fragment } from "react";
import PortfolioComponent from "@/components/PortfolioComponent";

export default function Page() {
  return (
    <Fragment>
      <MasterLayout>
        <PortfolioComponent />
      </MasterLayout>
    </Fragment>
  );
}
