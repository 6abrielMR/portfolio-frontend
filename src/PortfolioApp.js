import React from "react";
import { Provider } from "react-redux";
import { ContactMeScreen } from "./components/contact-me/ContactMeScreen";
import { FeaturesScreen } from "./components/features/FeaturesScreen";
import { HomeScreen } from "./components/home/HomeScreen";
import { ProjectsScreen } from "./components/projects/ProjectsScreen";
import { ResumeScreen } from "./components/resume/ResumeScreen";
import { Navbar } from "./components/ui/Navbar";
import { Separator } from "./components/ui/Separator";
import { store } from "./store/store";

export const PortfolioApp = () => {
  return (
    <div className="row vh-100 vw-100 m-0">
      <Provider store={store}>
        <div className="navbar p-0">
          <Navbar />
        </div>
        <div className="main-content">
          <HomeScreen />
          <FeaturesScreen />
          <Separator />
          <ProjectsScreen />
          <Separator />
          <ResumeScreen />
          <Separator />
          <ContactMeScreen />
        </div>
      </Provider>
    </div>
  );
};
