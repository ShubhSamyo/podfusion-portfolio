import "./plan.css";
import PlanCard from "./plancard";

const Plan = () => {
  return (
    <section className="container-fluid plan_image">
      <div className="container">
        <div className="tw-text-center tw-text-7xl	aclonica white-color">
          Choose the Plan that Fits
          <br />
          Your Business
        </div>
        <div className="tw-flex  tw-justify-center roboto-serif liberty-color tw-text-3xl">
          Lorem ipsum dolor sit amet consectetur. Id
          <br />
          vitae semper sed risus.
        </div>

        <div className="row ">
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </div>
    </section>
  );
};

export default Plan;
