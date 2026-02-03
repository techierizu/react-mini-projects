import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Rizwan",
    age: "26",
    email: "mdrizu25@gmail.com",
    interests: ["Coding", "Cricket", "Travelling"],
    theme: "light",
  });
  const [currentTab, setCurrentTab] = useState(0);
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      title: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 4) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 5) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      title: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length === 0) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      title: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleNext = () => {
    if (tabs[currentTab].validate()) {
      setCurrentTab((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (tabs[currentTab].validate()) {
      setCurrentTab((prev) => prev - 1);
    }
  };

  const ActiveTab = tabs[currentTab].component;

  return (
    <div>
      <div>
        {tabs.map((t, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: index === currentTab ? "grey" : "" }}
              onClick={() =>
                tabs[currentTab].validate() ? setCurrentTab(index) : null
              }
            >
              {t.title}
            </button>
          );
        })}
      </div>
      <div>
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {currentTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {currentTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {currentTab === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
};
export default TabForm;
