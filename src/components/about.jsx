import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "React_skill", content: "ReactJS/Redux", porcentage: "90%", value: "90" },
        { id: "Vue_skill", content: "VueJS/Vuex", porcentage: "90%", value: "90" },
        { id: "Typescript_skill", content: "Typescript", porcentage: "80%", value: "80" },
        { id: "Next_skill", content: "NextJS", porcentage: "80%", value: "80" },
        { id: "Tailwind_skill", content: "TailWind CSS", porcentage: "80%", value: "80" },
        { id: "Material_skill", content: "Material UI", porcentage: "90%", value: "90" },
        { id: "JavaScript_skill", content: "HTML/CSS/JQuery/VanillaJS", porcentage: "95%", value: "95" },
        { id: "Node_skill", content: "NodeJS", porcentage: "90%", value: "90" },
        { id: "Express_skill", content: "ExpressJS", porcentage: "90%", value: "90" },
        { id: "GraphQL_skill", content: "GraphQL", porcentage: "70%", value: "70" },
        { id: "AWS_skill", content: "AWS", porcentage: "60%", value: "60" },
        { id: "PHP_skill", content: "PHP/Laravel", porcentage: "80%", value: "80" },
        { id: "Mongo_skill", content: "MongoDB", porcentage: "85%", value: "85" },
        { id: "Mysql_skill", content: "Mysql", porcentage: "85%", value: "85" },
      ],
      about_me: [
        {
          id: "part1",
          content:
            "My name is Brandon. I'm a graduate of The Ohio State University's full-stack web development Bootcamp. I enjoyed programming since I was in high school and I used to implement any kind of formula to code lines in a simple way. I have a background in customer service and customer satisfaction has been my goal in my programming as well. Programming is about passion, I was, and I still am thrilled to discover the backstage of web applications, how they work, and the joy of creating myself something that would make life easier."
        },
        {
          id: "second-p-about",
          content:
            "I am a full-stack web developer with a strong self-employment background in Javascript programming. I have been focusing on MERN stack development."
        },
        {
          id: "third-p-about",
          content:
            "• Full-Stack Developer utilizing React/Redux to create state-driven web applications"
        },
        {
          id: "4th-p-about",
          content:
            "• Designs Node/Express servers to efficiently store and persist user and application data"
        },
        {
          id: "5th-p-about",
          content:
            "• Converts client design goals into clean CSS in order to lay out beautiful websites"
        },
        {
          id: "6th-p-about",
          content:
            "• Implements mobile-first design to ensure that websites are accessible across all devices"
        },
        {
          id: "7th-p-about",
          content:
            "• Utilizes the pattern of test-driven development to speed up release by avoiding bugs"
        },
        {
          id: "8th-p-about",
          content:
            " • Proud team player focused on achieving project objectives with speed and accuracy."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skills</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            <strong>{content.content}</strong>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
