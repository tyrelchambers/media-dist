import React from "react";
import { useWidget } from "../../hooks/useWidget";
import { H1 } from "../../components/headings/h1";
import Widget from "../../components/Widget/Widget";
import { useTypes } from "../../hooks/useTypes";
import styled from "styled-components";
import DashNav from "../../layout/DashNav/DashNav";
import { useUser } from "../../hooks/useUser";

const StyledGrid = styled.section`
  grid-template-rows: masonry;
`;

const Dashboard = () => {
  // const { createWidget } = useWidget();
  const { userQuery } = useUser();
  const [widgets, setWidgets] = React.useState([]);
  const { types, setUsedType } = useTypes();

  const addWidgetHandler = () => {
    setWidgets([...widgets, <Widget />]);
  };

  return (
    <div className="max-w-screen-xl w-full ml-auto mr-auto">
      <DashNav />
      <H1>Dashboard</H1>

      <main className="w-full mt-10 flex flex-col">
        <button
          className="rounded-lg text-white font-bold bg-accent-primary shadow-lg w-full max-w-lg p-3"
          onClick={addWidgetHandler}
        >
          Add Media
        </button>

        <StyledGrid className="mt-10 grid grid-cols-2 gap-6 mb-10">
          {widgets.length > 0 &&
            widgets.map((widget, index) => (
              <Widget
                types={types}
                setUsedType={setUsedType}
                user={userQuery.data}
              />
            ))}
        </StyledGrid>
      </main>
    </div>
  );
};

export default Dashboard;
