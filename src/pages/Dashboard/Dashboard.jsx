import React from "react";
import { useWidget } from "../../hooks/useWidget";
import { H1 } from "../../components/headings/h1";
import Widget from "../../components/Widget/Widget";
import { useTypes } from "../../hooks/useTypes";

const Dashboard = () => {
  // const { createWidget } = useWidget();
  const [widgets, setWidgets] = React.useState([]);
  const { types, usedTypes, setUsedType } = useTypes();

  const addWidgetHandler = () => {
    console.log(types);
    setWidgets([
      ...widgets,
      <Widget types={types} setUsedType={setUsedType} />,
    ]);
  };

  return (
    <div className="max-w-screen-xl w-full ml-auto mr-auto">
      <H1>Dashboard</H1>

      <main className="w-full mt-10 flex flex-col">
        {types.length > usedTypes.length && (
          <button
            className="rounded-lg text-white font-bold bg-accent-primary shadow-lg w-full max-w-lg p-3"
            onClick={addWidgetHandler}
          >
            Add Media
          </button>
        )}

        <section className="mt-10 grid grid-cols-2 gap-6">
          {widgets.length > 0 &&
            widgets.map((widget, index) => (
              <Widget types={types} setUsedType={setUsedType} />
            ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
