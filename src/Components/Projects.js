import React, { Component } from 'react';

class Projects extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns projects-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="projects-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="projects">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Here are a few projects I've worked on recently. </h1>
            <div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
            <h1>To see all my projects, check out my <a href='https://github.com/bchampp'>GitHub</a></h1>
          </div>
      </div>
   </section>
    );
  }
}

export default Projects;
